import { getLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'
import BLOG from '@/blog.config'
import { getGlobalData } from '@/lib/notion/getNotionData'
import NotionService from '@/lib/notionServer'

const Projects = props => {
  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  return <Layout {...props} />
}

export async function getStaticProps() {
  const props = await getGlobalData({ from: 'project-index' })

  const notionService = new NotionService()
  const dbId = process.env.DB_ID
  let projectsData = await notionService.queryDB(dbId);

  projectsData = projectsData.map(item => ({
    ...item,
    media: item['Files & media']?.files[0]?.file?.url || ''
  }));

  delete props.allPages
  props.projects = projectsData
  return {
    props,
    revalidate: parseInt(BLOG.NEXT_REVALIDATE_SECOND)
  }
}

export default Projects
