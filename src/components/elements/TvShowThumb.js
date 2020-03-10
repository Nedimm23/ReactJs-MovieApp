import React from "react";
import { StyledTvShowThumb } from "../styles/StyledTvShowThumb";

const TvShowThumb = ({ image, tvShowId, clickable }) => (
  <StyledTvShowThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="tvshowthumb" />
    ) : (
      <img src={image} alt="tvshowthumb" />
    )}
  </StyledTvShowThumb>
);

export default TvShowThumb;
