import React from "react";
import { down, up } from "../../assets";

export const StatIndicator = ({ isUp, todayAmount,label }: any) => {
  return (
    <div className="indicator" style={{ color: isUp ? "#1EB589" : "#DC414C" }}>
      <img src={isUp ? up : down} alt="down" className="indicator-img" />
      <span className="indicator-title">{todayAmount}</span>
      <span className="indicator-subtitle">{label}</span>
    </div>
  );
};
