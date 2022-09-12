import React from "react";
import './button.css'

function Button() {
  return (
    <div className={'button-container'}>
      <button className={'button-subscribe hvr-bounce-in hvr-back-pulse'}>Inscreva-se!</button>
    </div>
  );
}

export default Button;