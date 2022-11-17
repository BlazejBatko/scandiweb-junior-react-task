import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class ErrorPage extends Component {
  render() {
    return (
      <StyledErrorPageWrapper>
     

        <span> : ( </span>

        

        <StyledErrorMessage>

          <h1>4 0 4</h1>
          <p> The page you are looking for can’t be found.  </p>
          <Link to={"/"}>
            <StyledCTA> go to home </StyledCTA>
          </Link>

        </StyledErrorMessage>
      </StyledErrorPageWrapper>
    );
  }
}

const StyledCTA = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  background: #5ece7b;
  padding: 0.8em 2em;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #429c5a;

  }

`;

const StyledErrorMessage = styled.div`
gap: 1em;
display: flex;
flex-direction: column;

`
const StyledErrorPageWrapper = styled.div`
  position: fixed;
  background: white;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    font-family: "Roboto", sans-serif;
  }

  p {
    font-family: "Roboto", sans-serif;

  }
  span {
    font-family: "Roboto", sans-serif;
    font-size: 10rem;
    transform: rotate(90deg);
    font-weight: 800;
  }
`;
