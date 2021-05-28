import React from "react";
const Card = ({
  colorFlag,
  title,
  logo,
  timer,
  innertagline,
  team,
  budget,
  success,
  widthChange
}) => {
  return (
    <div className="cards_container-card">
      <span className="card-tagline">{title}</span>
      <div className={widthChange ? "card-logo-alter" : "card-logo-wrapper"}>
        <img src={logo} alt="Logo-Img" className="card-logo" />
      </div>
      <div className="card-time">
        <div className={colorFlag ? "card-timer-disabled" : "card-timer"}>
          {timer}
        </div>
      </div>
      <span className="card-tagline">{innertagline}</span>
      <div className="cards-shopping">
        <div className="cs-inner">
          <div className="card-shopping-stats">{team}</div>
          <div className="card-shopping-heading">teams</div>
        </div>
        <div className="cs-inner">
          <div className="card-shopping-stats">{budget}</div>
          <div className="card-shopping-heading">budget</div>
        </div>
        <div className="cs-inner">
          <div className="card-shopping-stats">{success}</div>
          <div className="card-shopping-heading">success</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
