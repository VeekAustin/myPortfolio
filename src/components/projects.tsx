interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: 'Static Landing Page',
    description: 'A frontend Static landing page with different sections including testimonials, socials, trusted ins.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/VeekAustin/nextJsStaticClonePage',
  },
  {
    title: 'Counter',
    description: 'Real-time counter app .',
    tech: ['React', 'JavaScript', 'Next.js', 'Tailwind'],
    liveUrl: 'https://weather.example.com',
    repoUrl: 'https://github.com/VeekAustin/nextAssignment',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-4 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-4'>Projects</h2>
        <p className='text-center text-gray-500 mb-12'>Things I have built</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.title}
              className='border border-gray-200 rounded-2xl p-6
                         hover:shadow-lg transition-shadow'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>{project.title}</h3>
              <p className='text-gray-600 mb-4 text-sm'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.map((t) => (
                  <span key={t}
                    className='bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full'>
                    {t}
                  </span>
                ))}
              </div>
              <div className='flex gap-4'>
                <a href={project.liveUrl}
                   className='text-blue-600 hover:underline text-sm font-medium'>
                  Live Demo →
                </a>
                <a href={project.repoUrl}
                   className='text-gray-600 hover:underline text-sm font-medium'>
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
