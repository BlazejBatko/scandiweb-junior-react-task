import React, { Component } from "react";
import styled from "styled-components";

export default class Spinner extends Component {
  state = {
    isToastShown: false,
  };
  componentDidMount() {
    const loadingTimer = setTimeout(() => {
      //After 3 seconds, if the page is still loading, show the toast
      this.setState({ isToastShown: true });
    }, 1000);

    return () => {
      //clearing timer on unmount
      clearTimeout(loadingTimer);
    };
  }

  render() {
    return (
      <>
        {this.state.isToastShown && (
          <StyledToast state={this.state.isToastShown ? "active" : "inactive"}>
            <strong>First loading may take longer, give it a chance :(</strong>
            <p>
              Graph QL endpoint has to "wake up" from sleep mode caused by its
              inactivity
            </p>
          </StyledToast>
        )}
        <StyledSpinner main={this.props.main} small={this.props.small}>
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </StyledSpinner>
      </>
    );
  }
}

const StyledToast = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 10%;
  width: 80%;
  left: 50vw;
  max-width: 700px;

  transform: translate(-50%, 0);

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1em;

  background-color: #101010;
  color: white;
  padding: 1.5em;

  transition: all 0.5s ease-in-out;
`;
const StyledSpinner = styled.div`
  ${(props) =>
    props.main
      ? `
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `
      : `
    
    `}

  .lds-spinner {
    color: official;
    display: grid;
    place-content: center;
    position: relative;
    width: 60px;
    height: 25px;
  }
  .lds-spinner div {
    transform-origin: 4px 4px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;

    border-radius: 20%;
    background: #000000;

    ${(props) =>
      props.small
        ? `
        left: 12px;
        height: 3px;
        width: 6px;
        `
        : ` 
        left: 36px;
        height: 9px;
        width: 18px;
    `}
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
