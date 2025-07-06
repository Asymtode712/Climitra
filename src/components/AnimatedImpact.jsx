import React, { useEffect, useRef, useState } from 'react';

const cardsData = [
  { title: 'CO₂ Removed', from: 0, to: 7, unit: 'M Ton' },
  { title: 'Rural Livelihoods Created', from: 0, to: 100000, unit: '' },
  { title: 'Coal Replaced', from: 0, to: 3.5, unit: 'M Ton' },
  { title: 'Waste-Biomass Repurposed', from: 0, to: 15, unit: 'M Ton' },
];

const AnimatedImpact = () => {
  const [values, setValues] = useState(cardsData.map((c) => c.from));
  const [year, setYear] = useState(2025);
  const containerRef = useRef(null);
  const animationStarted = useRef(false);
  const timerRef = useRef(null);

  const format = (val, unit) => {
    if (unit.includes('M')) return `${val.toFixed(1)} ${unit}`;
    return `${Math.round(val).toLocaleString()} ${unit}`;
  };

  const animateValues = (from, to, duration = 1200, animateYear = false) => {
    const start = performance.now();
    const startYear = 2025;
    const endYear = 2035;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const newValues = from.map((f, i) => f + (to[i] - f) * progress);
      setValues(newValues);

      if (animateYear) {
        const newYear = Math.round(startYear + (endYear - startYear) * progress);
        setYear(newYear);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValues(to);
        setYear(2035);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          const toValues = cardsData.map((c) => c.to);

          // First scroll-in animation
          animateValues(cardsData.map((c) => c.from), toValues, 1200, true);

          // Loop every 5s
          timerRef.current = setInterval(() => {
            setValues(cardsData.map((c) => c.from));
            setYear(2025);

            setTimeout(() => {
              animateValues(cardsData.map((c) => c.from), toValues, 1200, true);
            }, 500);
          }, 5000);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="bg-white py-16 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-montserrat text-neutral-950">
          Projected Impact by <span className="text-teal-800">{year}</span>
        </h2>
        <div className="mt-4 w-24 sm:w-32 mx-auto border-t-4 border-teal-800" />
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 min-w-[140px] max-w-[180px]"
          >
            <div className="relative w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-teal-800 flex items-center justify-center mb-4">
              <div className="absolute w-14 sm:w-16 h-14 sm:h-16 bg-white rounded-full z-0" />
              <img
                src="https://placehold.co/42x42"
                alt="Icon"
                className="w-8 sm:w-10 h-8 sm:h-10 z-10"
              />
            </div>

            <div className="text-teal-800 text-lg sm:text-xl md:text-2xl font-semibold font-montserrat">
              {format(values[i], card.unit)}
            </div>

            <div className="text-zinc-600 text-sm sm:text-base md:text-lg text-center mt-2 font-montserrat">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedImpact;