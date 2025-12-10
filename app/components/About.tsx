export default function About() {
  return (
    <section id="about" className="mb-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-12">
        <h2 className="heading mb-6 text-slate-900 dark:text-slate-50">
          Обо мне
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-400">
          <p className="text-body leading-relaxed">
            Я увлеченный разработчик с опытом создания современных
            веб-приложений. Мне нравится решать сложные задачи и создавать
            продукты, которые приносят пользу пользователям.
          </p>
          <p className="text-body leading-relaxed">
            В своей работе я использую современный стек технологий и следую
            лучшим практикам разработки. Постоянно изучаю новые инструменты и
            подходы, чтобы оставаться в курсе последних тенденций в индустрии.
          </p>
        </div>
      </div>
    </section>
  );
}
