import ProjectCard from '@/components/ProjectCard/Card'
import { useMemo } from 'react'

const ProjectList = ({ projects }) => {
  const getProjectByType = () => {
    const categorizedData = new Map()
    // 遍历数据，按照"type"属性进行分类
    projects.forEach(item => {
      const { type } = item
      if (!categorizedData.has(type)) {
        categorizedData.set(type, [])
      }
      categorizedData.get(type).push(item)
    })
    return categorizedData
  }

  const categorizedData = useMemo(() => getProjectByType(), [projects])

  const categorizedDataArray = Array.from(categorizedData.entries());

  return (
    <div className='dark:text-gray-300'>
      <h1
        className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
        Projects
      </h1>
      <h2 className="text-2xl leading-7 text-gray-500 dark:text-gray-400 py-10">
        Showcase projects with images
      </h2>
      {
        categorizedDataArray && categorizedDataArray.map(([projectType, items]) => (
          <>
            <p className='text-xl leading-7'>
              {projectType}
            </p>
            <div className='container py-12'>
              <div className='-m-4 flex flex-wrap'>
                {items.map((d) => (
                  <ProjectCard
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    href={d.href}
                  />
                ))}
              </div>
            </div>
          </>
        ))
      }
    </div>
  )
}

export default ProjectList
