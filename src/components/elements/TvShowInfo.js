import React from "react";
import PropTypes from "prop-types";

import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import TvShowThumb from "./TvShowThumb";
import { StyledTvShowInfo } from "../styles/StyledTvShowInfo";

const TvShowInfo = ({ tvShow }) => (
  <StyledTvShowInfo backdrop={tvShow.backdrop_path}>
    <div className="tvShowinfo-content">
      <div className="tvShowinfo-thumb">
        <TvShowThumb
          image={
            tvShow.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tvShow.poster_path}`
              : NoImage
          }
          clickable={false}
        />
      </div>
      <div className="tvShowinfo-text">
        <h1>{tvShow.title}</h1>
        <h3>PLOT</h3>
        <p>{tvShow.overview}</p>

        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{tvShow.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{tvShow.directors.length > 1 ? "S" : ""}</h3>
            {tvShow.directors.map(element => (
              <p key={element.credit_id}>{element.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </StyledTvShowInfo>
);

TvShowInfo.propTypes = {
  tvShow: PropTypes.object,
  directors: PropTypes.array
};

export default TvShowInfo;
