import React from "react";
import { FollowerInfo } from "../../common/types";
import { Slide } from "react-awesome-reveal";
import { useDarkMode } from "../../hooks/useDarkMode";
import { StatIndicator } from "../statIndicator/StatIndicator";

interface props {
  item: FollowerInfo;
}
export const PrimaryCard = ({ item }: props) => {
  const { color, todayAmount, icon, totalAmount, username, up } = item;
  const { dark } = useDarkMode();
  return (
    <Slide>
      <div className={`card ${dark}`}>
        <div className="card-top" style={{ background: color }}></div>
        <div className="card-bottom">
          <div className="card-title">
            <img src={icon} alt={icon} className="card-title-img" />
            <span className={`card-title-header ${dark}`}>{username}</span>
          </div>
          <div className="card-heading">
            <p className={`card-heading-header ${dark}`}>{totalAmount}</p>
            <p className={`card-heading-subtitle ${dark}`}>Followers</p>
          </div>
          <StatIndicator isUp={up} todayAmount={todayAmount} label={'Today'} />
        </div>
      </div>
    </Slide>
  );
};
