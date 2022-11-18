import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [currentDate, setCurrentDayAndTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDayAndTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <time>
      {currentDate.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
      })}
      , {currentDate.toLocaleTimeString()}
    </time>
  );
};
