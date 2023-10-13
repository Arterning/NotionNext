import ProjectCard from '@/components/ProjectCard/Card'

const ProjectList = ({ projects }) => {
  return (
    <div className="dark:text-gray-300">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Projects
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Showcase projects with images
      </p>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projects.map((d) => (
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
    </div>
  )
}

export default ProjectList;
