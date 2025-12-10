import ColorPalette from "../components/ColorPalette";
import { colors } from "@/lib/colors";

export default function PalettePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50">
          Цветовая палитра проекта
        </h1>

        {/* SVG Палитра */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
            Оригинальная палитра
          </h2>
          <ColorPalette />
        </div>

        {/* Примеры использования цветов в Tailwind */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            Примеры использования цветов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dark */}
            <div className="bg-dark text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Dark</h3>
              <p className="text-sm opacity-90">bg-dark</p>
              <p className="text-sm opacity-90 font-mono mt-2">{colors.dark}</p>
            </div>

            {/* Purple */}
            <div className="bg-purple text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Purple</h3>
              <p className="text-sm opacity-90">bg-purple</p>
              <p className="text-sm opacity-90 font-mono mt-2">
                {colors.purple}
              </p>
            </div>

            {/* Pink */}
            <div className="bg-pink text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Pink</h3>
              <p className="text-sm opacity-90">bg-pink</p>
              <p className="text-sm opacity-90 font-mono mt-2">{colors.pink}</p>
            </div>

            {/* Green */}
            <div className="bg-green text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Green</h3>
              <p className="text-sm opacity-90">bg-green</p>
              <p className="text-sm opacity-90 font-mono mt-2">
                {colors.green}
              </p>
            </div>

            {/* Red */}
            <div className="bg-red text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Red</h3>
              <p className="text-sm opacity-90">bg-red</p>
              <p className="text-sm opacity-90 font-mono mt-2">{colors.red}</p>
            </div>

            {/* Dark Purple */}
            <div className="bg-dark-purple text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Dark Purple</h3>
              <p className="text-sm opacity-90">bg-dark-purple</p>
              <p className="text-sm opacity-90 font-mono mt-2">
                {colors.darkPurple}
              </p>
            </div>

            {/* Light Gray */}
            <div className="bg-light-gray text-dark p-6 rounded-lg border border-slate-300">
              <h3 className="font-bold text-lg mb-2">Light Gray</h3>
              <p className="text-sm opacity-80">bg-light-gray</p>
              <p className="text-sm opacity-80 font-mono mt-2">
                {colors.lightGray}
              </p>
            </div>

            {/* Purple Dark */}
            <div className="bg-purple-dark text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Purple Dark</h3>
              <p className="text-sm opacity-90">bg-purple-dark</p>
              <p className="text-sm opacity-90 font-mono mt-2">
                {colors.purpleDark}
              </p>
            </div>

            {/* Gradient */}
            <div
              className="text-white p-6 rounded-lg"
              style={{
                background: `linear-gradient(to right, ${colors.white}, ${colors.purpleDark})`,
              }}
            >
              <h3 className="font-bold text-lg mb-2 text-dark">Gradient</h3>
              <p className="text-sm opacity-90 text-dark">
                white → purple-dark
              </p>
            </div>
          </div>
        </div>

        {/* Примеры текстовых цветов */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            Текстовые цвета
          </h2>
          <div className="space-y-4">
            <p className="text-dark text-2xl font-bold">text-dark</p>
            <p className="text-purple text-2xl font-bold">text-purple</p>
            <p className="text-pink text-2xl font-bold">text-pink</p>
            <p className="text-green text-2xl font-bold">text-green</p>
            <p className="text-red text-2xl font-bold">text-red</p>
            <p className="text-dark-purple text-2xl font-bold">
              text-dark-purple
            </p>
          </div>
        </div>

        {/* Границы */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            Границы
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-4 border-purple p-4 rounded">
              border-purple
            </div>
            <div className="border-4 border-pink p-4 rounded">border-pink</div>
            <div className="border-4 border-green p-4 rounded">
              border-green
            </div>
            <div className="border-4 border-red p-4 rounded">border-red</div>
          </div>
        </div>
      </div>
    </div>
  );
}
