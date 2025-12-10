import { colors } from "@/lib/colors";

export default function ColorPalette() {
  const colorBlocks = [
    { x: 0, color: colors.dark, name: "Dark" },
    { x: 203, color: colors.white, name: "White" },
    { x: 406, color: colors.lightGray, name: "Light Gray" },
    { x: 609, color: colors.purple, name: "Purple" },
    { x: 812, color: "gradient", name: "Gradient" },
    { x: 1015, color: colors.darkPurple, name: "Dark Purple" },
    { x: 1218, color: colors.pink, name: "Pink" },
    { x: 1421, color: colors.green, name: "Green" },
    { x: 1624, color: colors.red, name: "Red" },
  ];

  return (
    <div className="w-full">
      <svg
        width="1797"
        height="173"
        viewBox="0 0 1797 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <rect x="1015" width="173" height="173" fill="#4E324B" />
        <rect x="1421" width="173" height="173" fill="#00A67D" />
        <rect x="1218" width="173" height="173" fill="#D32F73" />
        <rect x="1624" width="173" height="173" fill="#DF2B4A" />
        <rect
          x="812"
          width="173"
          height="173"
          fill="url(#paint0_linear_2088_1442)"
        />
        <rect x="609" width="173" height="173" fill="#AA56A8" />
        <rect x="406" width="173" height="173" fill="#D7D9E0" />
        <rect x="203" width="173" height="173" fill="white" />
        <rect width="173" height="173" fill="#262323" />
        <defs>
          <linearGradient
            id="paint0_linear_2088_1442"
            x1="812"
            y1="0"
            x2="999.517"
            y2="17.5074"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#964294" />
          </linearGradient>
        </defs>
      </svg>

      {/* Информация о цветах */}
      <div className="mt-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 text-xs">
        {colorBlocks.map((block) => (
          <div key={block.x} className="text-center">
            <div
              className="w-full h-12 rounded mb-1 border border-slate-200"
              style={{
                backgroundColor:
                  block.color === "gradient" ? undefined : block.color,
                background:
                  block.color === "gradient"
                    ? `linear-gradient(to right, ${colors.white}, ${colors.purpleDark})`
                    : undefined,
              }}
            />
            <div className="font-medium text-slate-700 dark:text-slate-300">
              {block.name}
            </div>
            {block.color !== "gradient" && (
              <div className="text-slate-500 dark:text-slate-400 font-mono">
                {block.color}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
