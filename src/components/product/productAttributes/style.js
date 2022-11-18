import styled from "styled-components";

const StyledSwatchAttributeBox = styled.div`
  background: ${({ color }) => color};

  border: ${({ color }) => (color === "#FFFFFF" ? "1px solid black" : "none")};

  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `
    width: 32px;
    height: 32px;
    `
      :  
    `
    width: 16px;
    height: 16px;
  `}
`;

const StyledAttributeBoxText = styled.span`
  font-weight: 400;
  font-family: "Source Sans Pro";
`;

const StyledAttributeNameLabel = styled.h3`
  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `
    font-weight: 700;
    font-family: 'Roboto Condensed';
    font-size: 1.125rem;
    text-transform: uppercase;
    `
      : 
    `
    font-weight: 400;
    font-size: 0.875rem;
    text-transform: capitalize;
    `}
`;
const StyledAttributesWrapper = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  .selected-swatch {
    background: #1d1f22;
    color: white;
  }
  .selected {
    outline: 1px solid #5ece7b;
    outline-offset: 1px;
  }
`;

const StyledAttributesContainer = styled.div`
  display: flex;
  gap: 0.5em;
  margin-left: 2px;
`;

const StyledAttributeBox = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `
    min-width: 65px;
    height: 45px;
    padding: 0 0.8em;
    `
    : 
    `
    padding: 0 0.2em;
    min-width: 24px;
    min-height: 24px;
    `}
`;

export {
  StyledSwatchAttributeBox,
  StyledAttributeBoxText,
  StyledAttributeNameLabel,
  StyledAttributesWrapper,
  StyledAttributesContainer,
  StyledAttributeBox,
};
