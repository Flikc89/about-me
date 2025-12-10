import { Code } from 'lucide-react';

export default function MySkills() {
  const skills = [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
  ];

  return (
    <section id='skills' className='mb-16'>
      <h2 className='heading mb-8 text-center text-slate-900 dark:text-slate-50'>
        Навыки
      </h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => (
          <div
            key={skill}
            className='group rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400'
          >
            <div className='flex items-center gap-3'>
              <Code className='h-5 w-5 text-blue-500' />
              <span className='card-heading text-pink'>{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
