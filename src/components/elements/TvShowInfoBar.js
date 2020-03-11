import React from "react";
import PropTypes from "prop-types";

import FontAwesome from "react-fontawesome";
import { calcTime, convertMoney } from "../../helpers";
import { StyledTvShowInfoBar } from "../styles/StyledTvShowInfoBar";

const TvShowInfoBar = ({ time, budget, revenue }) => (
  <StyledTvShowInfoBar>
    <div className="tvshowinfobar-content">
      <div className="tvshowinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="tvshowinfobar-info">
          Running time: {calcTime(time)}
        </span>
      </div>
      <div className="tvshowinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="tvshowinfobar-info">
          Budget: {convertMoney(budget)}
        </span>
      </div>
      <div className="tvshowinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="tvshowinfobar-info">
          Revenue: {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledTvShowInfoBar>
);

TvShowInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
};

export default TvShowInfoBar;