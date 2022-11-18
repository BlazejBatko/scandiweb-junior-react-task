import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyledCTA, StyledErrorMessage, StyledErrorPageWrapper } from "./style";

export default class ErrorPage extends Component {
  render() {
    return (
      <StyledErrorPageWrapper>
        <span> : ( </span>

        <StyledErrorMessage>
          <h1>4 0 4</h1>
          <p> The page you are looking for can’t be found. </p>
          <Link to={"/"}>
            <StyledCTA> go to home </StyledCTA>
          </Link>
        </StyledErrorMessage>
      </StyledErrorPageWrapper>
    );
  }
}
