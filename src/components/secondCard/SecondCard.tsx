import React from "react";
import { Slide } from "react-awesome-reveal";
import { StatsInfo } from "../../common/types";
import { useDarkMode } from "../../hooks/useDarkMode";
import { StatIndicator } from "../statIndicator/StatIndicator";

export const SecondCard = ({ item }: { item: StatsInfo }) => {
  const { header, icon, id, todayAmount, totalAmount, up } = item;
  const {dark } = useDarkMode()
  return (
    <Slide>
      <div className={`stat-card ${dark}`}>
        <div className="stat-card-wrapper">
          <h1 className={`stat-card-wapper-header ${dark}`}>{header}</h1>
          <img src={icon} alt={`icon${id}`} className="stat-card-img" />
        </div>
        <div className="stat-card-wrapper">
          <h2 className={`stat-card-wapper-desc ${dark}`}>{totalAmount}</h2>
          <StatIndicator isUp={up} todayAmount={todayAmount} label="%" />
        </div>
      </div>
    </Slide>
  );
};
