import React, { useState, useEffect } from "react";

type Props = {
  targetDate: string;
};

const TimerTournament: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(targetDate);
    const difference = end.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-white flex gap-2 font-black uppercase">
      <div className="flex flex-col items-center w-[55px]">
        <div className="text-[34px]">{timeLeft.days}</div>
        <p className="text-[14px]">Дней</p>
      </div>
      <div className="flex flex-col items-center w-[55px]">
        <div className="text-[34px]">{timeLeft.hours}</div>
        <p className="text-[14px]">Часов</p>
      </div>
      <div className="flex flex-col items-center w-[55px]">
        <div className="text-[34px]">{timeLeft.minutes}</div>
        <p className="text-[14px]">Мин</p>
      </div>
      <div className="flex flex-col items-center w-[55px]">
        <div className="text-[34px]">{timeLeft.seconds}</div>
        <p className="text-[14px]">Сек</p>
      </div>
    </div>
  );
};

export default TimerTournament;
