import { useState, useEffect } from 'react';

function CountdownTimer() {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(58);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else if (hours > 0) {
        setSeconds(59);
        setMinutes(59);
        setHours(hours - 1);
      } else if (days > 0) {
        setSeconds(59);
        setMinutes(59);
        setHours(23);
        setDays(days - 1);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [days, hours, minutes, seconds]);

  return (
    
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
          <span className="countdown font-mono text-[34px] md:text-5xl">
            <span style={{ '--value': days }}>{days}</span>
          </span>
          days
        </div>
        <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
          <span className="countdown font-mono text-[34px] md:text-5xl">
            <span style={{ '--value': hours }}>{hours}</span>
          </span>
          hours
        </div>
        <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
          <span className="countdown font-mono text-[34px] md:text-5xl">
            <span style={{ '--value': minutes }}>{minutes}</span>
          </span>
          min
        </div>
        <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
          <span className="countdown font-mono text-[34px] md:text-5xl">
            <span style={{ '--value': seconds }}>{seconds}</span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
