import Image from './Image'
import Link from './Link'
import { Github, Link as LinkIcon } from 'lucide-react'

const ProjectCard = ({ title, description, imgSrc, href, githubLink }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full shadow-md transition-all bg-card border-accent border duration-300 ease hover:shadow-lg hover:translate-y-[-2px]'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex items-center justify-between">
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
          <div className="flex space-x-4">
            {githubLink && (
              <Link
                href={githubLink}
                aria-label={`GitHub repository for ${title}`}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                <Github className="h-6 w-6" />
              </Link>
            )}
            {href && (
              <Link
                href={href}
                aria-label={`Live demo for ${title}`}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                <LinkIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard