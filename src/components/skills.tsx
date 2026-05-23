interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  { category: 'Frontend',   items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend',    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'] },
  { category: 'Tools',      items: ['Git', 'Docker', 'Vercel', 'Figma', 'VS Code'] },
];

export default function Skills() {
  return (
    <section id='skills' className='py-20 px-4 bg-gray-50'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-12'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {skills.map(({ category, items }) => (
            <div key={category} className='bg-white rounded-2xl p-6 shadow-sm'>
              <h3 className='font-bold text-blue-600 mb-4 text-lg'>{category}</h3>
              <ul className='space-y-2'>
                {items.map((skill) => (
                  <li key={skill} className='flex items-center gap-2 text-gray-700'>
                    <span className='w-2 h-2 bg-blue-400 rounded-full' />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
