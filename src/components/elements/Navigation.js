import React from "react";
import PropTypes from "prop-types";

import { Link } from "@reach/router";
import { StyledNavigation } from "../styles/StyledNavigation";

const Navigation = ({ movie, tvShow }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{movie || tvShow}</p>
    </div>
  </StyledNavigation>
);

Navigation.propTypes = {
  movie: PropTypes.string,
  tvShow: PropTypes.string
};

export default Navigation;
