import { useState, useEffect, memo, useMemo, useCallback } from "react";

import { withTranslation } from "react-i18next";

import { TFunction } from "i18next";

import { STAGES } from "../../constants";

interface IProps {
  t: TFunction;
}

const Timer: React.FC<IProps> = memo(({ t }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split(".").map(Number);
    return new Date(year, month - 1, day);
  };

  const getTimeDifference = (targetDate: Date) => {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const timeDiffObj = {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    };

    return timeDiffObj;
  };

  const futureDates = useMemo(() => {
    return STAGES.map(parseDate)
      .filter((date) => date > new Date())
      .sort((a, b) => a.getTime() - b.getTime());
  }, []);

  const updateNearestStage = useCallback(() => {
    if (futureDates.length > 0) {
      const nearestStage = futureDates[0];
      const timeDiff = getTimeDifference(nearestStage);
      setTimeRemaining(timeDiff);
    }
  }, [futureDates]);

  useEffect(() => {
    updateNearestStage();

    const intervalId = setInterval(updateNearestStage, 1000);

    return () => clearInterval(intervalId);
  }, [updateNearestStage]);
  return (
    <div className="flex items-center min-[1600px]:gap-10 md:gap-7 gap-10">
      <div className="flex flex-col items-center min-[1600px]:gap-[10px] gap-1">
        <h2 className="min-[1600px]:text-[72px] md:text-[60px] text-[32px]">
          {timeRemaining.days}
        </h2>
        <p className="text-[#C8C8C8] text-[14px] font-light poppins">
          {t("days")}
        </p>
      </div>
      <div className="flex flex-col items-center min-[1600px]:gap-[10px] gap-1">
        <h2 className="min-[1600px]:text-[72px] md:text-[60px] text-[32px]">
          {timeRemaining.hours}
        </h2>
        <p className="text-[#C8C8C8] text-[14px] font-light poppins">
          {t("hours")}
        </p>
      </div>
      <div className="flex flex-col items-center min-[1600px]:gap-[10px] gap-1">
        <h2 className="min-[1600px]:text-[72px] md:text-[60px] text-[32px]">
          {timeRemaining.minutes}
        </h2>
        <p className="text-[#C8C8C8] text-[14px] font-light poppins">
          {t("minutes")}
        </p>
      </div>
      <div className="flex flex-col items-center min-[1600px]:gap-[10px] gap-1">
        <h2 className="min-[1600px]:text-[72px] md:text-[60px] text-[32px]">
          {timeRemaining.seconds}
        </h2>
        <p className="text-[#C8C8C8] text-[14px] font-light poppins w-[55px] md:w-[85px] text-center">
          {t("seconds")}
        </p>
      </div>
    </div>
  );
});

export default withTranslation()(Timer);
