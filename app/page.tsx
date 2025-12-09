import { Github, Linkedin, Mail, MapPin, Briefcase, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header Section */}
          <header className="mb-16 text-center">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white dark:bg-slate-900">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-4xl font-bold text-white">
                  Я
                </div>
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl lg:text-6xl">
              Привет, я разработчик
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl">
              Создаю современные веб-приложения с использованием передовых
              технологий
            </p>
          </header>

          {/* About Section */}
          <section className="mb-16">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-12">
              <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-50">
                Обо мне
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p className="leading-relaxed">
                  Я увлеченный разработчик с опытом создания современных
                  веб-приложений. Мне нравится решать сложные задачи и создавать
                  продукты, которые приносят пользу пользователям.
                </p>
                <p className="leading-relaxed">
                  В своей работе я использую современный стек технологий и
                  следую лучшим практикам разработки. Постоянно изучаю новые
                  инструменты и подходы, чтобы оставаться в курсе последних
                  тенденций в индустрии.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-slate-50">
              Навыки
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
              ].map((skill) => (
                <div
                  key={skill}
                  className="group rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400"
                >
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-blue-500" />
                    <span className="font-medium text-slate-900 dark:text-slate-50">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-slate-50">
              Опыт работы
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Frontend Developer",
                  company: "Компания",
                  period: "2023 - настоящее время",
                  description:
                    "Разработка пользовательских интерфейсов с использованием React и Next.js",
                },
                {
                  title: "Full Stack Developer",
                  company: "Стартап",
                  period: "2021 - 2023",
                  description:
                    "Создание полнофункциональных веб-приложений от идеи до запуска",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-2 flex items-start gap-4">
                    <Briefcase className="mt-1 h-5 w-5 text-blue-500" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                        {exp.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-slate-50">
              Контакты
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="mailto:example@email.com"
                className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-50">
                    Email
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    example@email.com
                  </p>
                </div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                  <Github className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-50">
                    GitHub
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    github.com/username
                  </p>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-50">
                    LinkedIn
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    linkedin.com/in/username
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-50">
                    Локация
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Москва, Россия
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
