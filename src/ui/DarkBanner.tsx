import React from "react";

const DarkBanner = () => {
  return (
    <section
      aria-label="Dark banner"
      className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-slate-900 to-black"
    >
      {/* лівий інформаційний блок */}
      <div className="absolute left-0 top-0 h-full w-2/5 md:w-1/3 bg-gradient-to-br from-teal-800/90 to-teal-700/90 text-slate-100 p-6 flex flex-col justify-center">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-teal-200">
          СПЕЦПОВІДОМЛЕННЯ
        </span>
        <h3 className="mt-2 text-lg md:text-2xl font-extrabold drop-shadow-md">
          Ваш заголовок
        </h3>
        <p className="mt-2 text-xs md:text-sm opacity-90 max-w-sm">
          Опис або слоган сюди. Лівий блок визначає головну ідею банера.
        </p>
      </div>

      {/* центр зображення/очі (сировина з SVG) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 flex items-center justify-center pointer-events-none">
        <svg
          width="420"
          height="190"
          viewBox="0 0 420 190"
          aria-label="eyes"
          className="shadow-2xl"
        >
          <defs>
            <radialGradient id="eyeGlow" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#eaff66" />
              <stop offset="60%" stopColor="#6bd24a" stopOpacity="1" />
              <stop offset="100%" stopColor="#0b5" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="iris" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#f5ff7a" />
              <stop offset="60%" stopColor="#a3ff3d" />
              <stop offset="100%" stopColor="#5bd400" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* тіньова голова (під очима) */}
          <ellipse cx="210" cy="92" rx="180" ry="54" fill="rgba(0,0,0,.25)" />

          {/* очі */}
          <ellipse cx="140" cy="90" rx="58" ry="42" fill="url(#iris)" filter="url(#glow)" />
          <ellipse cx="280" cy="90" rx="58" ry="42" fill="url(#iris)" filter="url(#glow)" />

          {/* зіниці */}
          <circle cx="140" cy="90" r="18" fill="#0b0b0b" />
          <circle cx="280" cy="90" r="18" fill="#0b0b0b" />

          {/* блиск */}
          <circle cx="128" cy="78" r="6" fill="#fff" opacity="0.9" />
          <circle cx="268" cy="78" r="5" fill="#fff" opacity="0.9" />
        </svg>
      </div>

      {/* права вертикальна панель з цифрами */}
      <div className="absolute right-0 top-0 bottom-0 w-1/5 md:w-1/6 flex flex-col items-center justify-center text-teal-200">
        {["09", "12", "28", "46"].map((d, idx) => (
          <div key={idx} className="mb-2 text-xs md:text-base font-mono tracking-widest">
            {d}
          </div>
        ))}
      </div>

      {/* легкі границі/градації по краях (опційно) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-gradient-to-l from-black/60 to-transparent" />
      </div>
    </section>
  );
};

export default DarkBanner;