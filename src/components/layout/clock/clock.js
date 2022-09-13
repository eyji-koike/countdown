import React, { useEffect, useState } from "react";
import './clock.css'
import { calculate_time_left } from "../../utils/calculate_time_left";

function Clock() {
  const date = new Date('09/15/2022')
  const [targetDate, setTarget] = useState(date)
  const [timeLeft, setTimeLeft] = useState(calculate_time_left(targetDate))

  useEffect(() => {
    const calculation = setInterval(() => setTimeLeft(calculate_time_left(targetDate)), 1000);

    return () => clearTimeout(calculation);
  }, [targetDate]);

  return (
    <div className={"clock"}>
      <div className={'clock-legend'}>
        <div className={"day"}>DD</div>
        <div className={"semi-colon"}>:</div>
        <div className={"hour"}>HH</div>
        <div className={"semi-colon"}>:</div>
        <div className={"min"}>MM</div>
        <div className={"semi-colon"}>:</div>
        <div className={"sec"}>SS</div>
      </div>
      <div className={'clock-time bounce'}>
        <div className={"day"}>{timeLeft.days <10 ? `0${timeLeft.days}`:timeLeft.days}</div>
        <div className={"semi-colon"}>:</div>
        <div className={"hour"}>{timeLeft.hours <10 ? `0${timeLeft.hours}`: timeLeft.hours}</div>
        <div className={"semi-colon"}>:</div>
        <div className={"min"}>{timeLeft.minutes <10 ? `0${timeLeft.minutes }`:timeLeft.minutes }</div>
        <div className={"semi-colon"}>:</div>
        <div className={"sec"}>{timeLeft.seconds < 10 ? `0${timeLeft.seconds }`:timeLeft.seconds }</div>
      </div>
    </div>
  );
}

export default Clock;