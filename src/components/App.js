import React from "react";
import {GlobalStyle } from './styles/GlobalStyle';

import Header from "./elements/Header";
import Home from "./Home";

const App = () => (
  <React.Fragment>
    <Header />
    <Home />
    <GlobalStyle />
  </React.Fragment>
);

export default App;
