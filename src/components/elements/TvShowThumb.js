import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import { StyledTvShowThumb } from "../styles/StyledTvShowThumb";

const TvShowThumb = ({ image, tvId, clickable }) => (
  <StyledTvShowThumb>
    {clickable ? (
      <Link to={`/${tvId}`}>
        <img className="clickable" src={image} alt="tvshowthumb" />
      </Link>
    ) : (
      <img src={image} alt="tvshowthumb" />
    )}
  </StyledTvShowThumb>
);

TvShowThumb.propTypes = {
  image: PropTypes.string,
  tvId: PropTypes.number,
  clickable: PropTypes.bool
}

export default TvShowThumb;
