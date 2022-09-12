import React, { useEffect, useRef, useState } from "react";
import './clock.css'
import { calculate_time_left } from "../../utils/calculate_time_left";

function Clock() {
  const [dateTime, setDateTime] = useState(new Date())
  const date = new Date('09/15/2022')
  const [targetDate, setTarget] = useState(date)
  const [timeLeft, setTimeLeft] = useState(calculate_time_left(targetDate))
  const [showTimer, setShowTimer] =useState(true)
  const [message, setMessage] = useState('Change Target')
  console.log(targetDate)
  console.log(timeLeft)

  const handleSubmission = (data) =>{
    data.preventDefault();
    setShowTimer(!showTimer);
    if (message == "Change Target") {
      setMessage("Set new target")
    }
    else {
      setMessage("Change Target")
    }
  }
  const handleNewTarget = (event) => {
    if (targetDate != event.target.value) {
      const newtarget = new Date(event.target.value)
      setTarget(newtarget)
    }
  }

  useEffect(() => {
    setInterval(() => setTimeLeft(calculate_time_left(targetDate)), 1000)
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
      <div className={'clock-time'}>
        <div className={"day"}>{dateTime.getDate()<10 ? `0${dateTime.getDate()}`:dateTime.getDate()}</div>
        <div className={"semi-colon"}>:</div>
        <div className={"hour"}>{dateTime.getHours()<10 ? `0${dateTime.getHours()}`: dateTime.getHours()}</div>
        <div className={"semi-colon"}>:</div>
        <div className={"min"}>{dateTime.getMinutes() <10 ? `0${dateTime.getMinutes()}`:dateTime.getMinutes()}</div>
        <div className={"semi-colon"}>:</div>
        <div className={"sec"}>{dateTime.getSeconds() < 10 ? `0${dateTime.getSeconds()}`:dateTime.getSeconds()}</div>
      </div>
        <form onSubmit={e => handleSubmission()} className={'form'} >
          <input className={'date-input'}
                 type={"datetime-local"}
                 value={dateTime}
                 id={'date'}
                 onChange={handleNewTarget}/>
          <input type="submit" className={'target-button'} value="Submit" />
        </form>
    </div>
  );
}

export default Clock;