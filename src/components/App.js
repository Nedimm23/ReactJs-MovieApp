import React from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import TvShow from "./TvShow";
import NotFound from "./NotFound";

const App = () => (
  <React.Fragment>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <TvShow path="/:tvId" />
      <NotFound default />
    </Router>

    <GlobalStyle />
  </React.Fragment>
);

export default App;
