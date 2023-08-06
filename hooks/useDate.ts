import { useState, useEffect, useRef } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export const useDate = () => {
  const [date, setDate] = useState<Dayjs>();
  const intervalIDs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const _intervalIDs = intervalIDs;
    const intervalID = setInterval(() => {
      if (
        dayjs().format("DD-MM-YYYY:MM:mm") !== date?.format("DD-MM-YYYY:MM:mm")
      ) {
        setDate(dayjs());
      }
    }, 1000);

    intervalIDs.current.push(intervalID);

    return () => {
      _intervalIDs.current.forEach((id) => {
        clearInterval(id);
      });
    };
  }, [date]);

  return { date };
};
