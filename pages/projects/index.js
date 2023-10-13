import { getLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'
import BLOG from '@/blog.config'
import projectsData from '@/data/projectsData'

const Projects = props => {
  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  return <Layout {...props} />
}

export async function getStaticProps() {
  const props = {
    projects: projectsData
  }
  return {
    props,
    revalidate: parseInt(BLOG.NEXT_REVALIDATE_SECOND)
  }
}

export default Projects
