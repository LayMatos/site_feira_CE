import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-10-08T09:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const labels = ["Dias", "Horas", "Minutos", "Segundos"];
const labelsShort = ["D", "H", "M", "S"];

const Countdown = () => {
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <div className="flex gap-1.5 sm:gap-4 justify-center">
      {values.map((val, idx) => (
        <div
          key={labels[idx]}
          className="glass rounded-xl sm:rounded-2xl px-2 py-2 sm:px-5 sm:py-4 text-center w-[68px] sm:w-auto sm:min-w-[96px] shrink-0"
        >
          <div className="font-heading text-xl sm:text-4xl font-bold tabular-nums leading-none">
            {String(val).padStart(2, "0")}
          </div>
          <div className="text-[9px] sm:text-sm text-white/60 mt-1 uppercase tracking-wide sm:tracking-wider">
            <span className="sm:hidden">{labelsShort[idx]}</span>
            <span className="hidden sm:inline">{labels[idx]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
