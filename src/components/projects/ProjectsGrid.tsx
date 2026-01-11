import { data, PROJECT_CONTENT } from "@/components/projects/Data";

import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ProjectsGrid = () => {
  return (
    <div className="w-full pt-8">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Explore my latest work in AI, RAG systems, and LLM fine-tuning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECT_CONTENT.map((project, index) => {
          // Find the matching category from the data array
          const projectData = data.find(p => p.title === project.title);
          const category = projectData ? projectData.category : 'Project';

          return (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.images[0].src}
                  alt={project.title}
                  width={400}
                  height={225}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block bg-blue-500 text-xs px-2 py-1 rounded-full mb-2">
                    {category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech: string, techIdx: number) => (
                      <span
                        key={techIdx}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description.substring(0, 120)}...
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.links.find((link: any) => link.name.includes('GitHub'))?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>

                  {project.links.some((link: any) => link.name.includes('Demo')) && (
                    <a
                      href={project.links.find((link: any) => link.name.includes('Demo'))?.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ProjectsGrid;