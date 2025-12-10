export default function Navigation() {
  return (
    <header className="fixed top-0 left-1/2 z-40 w-full -translate-x-1/2 px-4">
      <div className="mx-auto flex h-12 max-w-[1208px] items-center justify-between">
        {/* Имя слева */}
        <div className="text-body font-bold uppercase tracking-[0.16em] text-[#B2B1B1]">
          Denis Lobanov
        </div>

        {/* Навигация справа */}
        <nav className="text-body flex items-center gap-10 font-normal uppercase tracking-[0.16em] text-[#B2B1B1]">
          <a href="#about" className="transition-colors hover:text-white">
            обо мне
          </a>
          <a href="#skills" className="transition-colors hover:text-white">
            навыки
          </a>
          <a href="#experience" className="transition-colors hover:text-white">
            опыт
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
