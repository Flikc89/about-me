import { Briefcase } from "lucide-react";

export default function WorkExperience() {
  const experiences = [
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
  ];

  return (
    <section id="experience" className="mb-16">
      <h2 className="heading mb-8 text-center text-slate-900 dark:text-slate-50">
        Опыт работы
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-2 flex items-start gap-4">
              <Briefcase className="mt-1 h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <h3 className="card-heading text-pink">{exp.title}</h3>
                <p className="text-body text-slate-600 dark:text-slate-400">
                  {exp.company} • {exp.period}
                </p>
              </div>
            </div>
            <p className="text-body mt-2 text-slate-600 dark:text-slate-400">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
