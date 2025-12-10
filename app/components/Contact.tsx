import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id='contact' className='mb-16'>
      <h2 className='heading mb-8 text-center text-slate-900 dark:text-slate-50'>
        Контакты
      </h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <a
          href='mailto:example@email.com'
          className='group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400'
        >
          <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900'>
            <Mail className='h-6 w-6 text-blue-600 dark:text-blue-400' />
          </div>
          <div>
            <p className='contact-text text-slate-900 dark:text-slate-50'>
              Email
            </p>
            <p className='contact-text text-sm text-slate-600 dark:text-slate-400'>
              example@email.com
            </p>
          </div>
        </a>
        <a
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400'
        >
          <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800'>
            <Github className='h-6 w-6 text-slate-700 dark:text-slate-300' />
          </div>
          <div>
            <p className='contact-text text-slate-900 dark:text-slate-50'>
              GitHub
            </p>
            <p className='contact-text text-sm text-slate-600 dark:text-slate-400'>
              github.com/username
            </p>
          </div>
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400'
        >
          <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900'>
            <Linkedin className='h-6 w-6 text-blue-600 dark:text-blue-400' />
          </div>
          <div>
            <p className='contact-text text-slate-900 dark:text-slate-50'>
              LinkedIn
            </p>
            <p className='contact-text text-sm text-slate-600 dark:text-slate-400'>
              linkedin.com/in/username
            </p>
          </div>
        </a>
        <div className='flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900'>
          <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900'>
            <MapPin className='h-6 w-6 text-purple-600 dark:text-purple-400' />
          </div>
          <div>
            <p className='contact-text text-slate-900 dark:text-slate-50'>
              Локация
            </p>
            <p className='contact-text text-sm text-slate-600 dark:text-slate-400'>
              Москва, Россия
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
