import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Side and professional projects I've worked on
          </p>
        </div>
        <div className="py-12">
          <div className="space-y-10">
            {projectsData.map((project) => (
              <div key={project.title} className="grid md:grid-cols-[200px_1fr] gap-4">
                {project.imgSrc && (
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="object-cover w-full h-40 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-col">
                  <div className="flex justify-between items-baseline mb-1">
                    <h2 className="text-2xl font-bold">
                      {project.href ? (
                        <Link
                          href={project.href}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>

                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
