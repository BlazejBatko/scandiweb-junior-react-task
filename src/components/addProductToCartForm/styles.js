import styled from "styled-components";

const StyledProductPrice = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
`;

const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.25em;
  gap: 1em;
`;

const StyledPriceLabel = styled.h4`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

const StyledButtonCTA = styled.button`
  background: #5ece7b;
  cursor: pointer;
  display: block;
  text-transform: uppercase;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 1em 2em;
  width: 292px;
  margin-top: 1.25em;

  ${({ children }) => {
    switch (children) {
      case "out of stock":
        return "background: #e0e0e0; cursor: not-allowed;";
      case "add once again":
        return "background: #303030;";
      default:
        return "background: #5ece7b; cursor: pointer;";
    }
  }}
`;

const StyledAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5em;
`;

const StyledAttributeName = styled.h4`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.5em 2em;

  ${(props) =>
    !props.isSwatch &&
    `
    padding: 0;
    width: 30px;
    height: 30px;
    `}
`;

const StyledAttributeInputsContainer = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-weight: 400;
  font-family: "Source Sans Pro";
  background: ${(props) => props.color || "white"};
  border: ${(props) =>
    props.isSwatch
      ? "1px solid black"
      : props.color === "White"
      ? "1px solid black"
      : "none"};
`;

const RadioButton = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  ${({ isSwatch }) =>
    isSwatch
      ? `
  &:checked + ${RadioButtonLabel} {
    background: black;
    color: white;
  }
  `
      : `
  &:checked + ${RadioButtonLabel} {
    outline: 1px solid #5ECE7B;
    outline-offset: 1px;
  }
`}
`;

export {
  StyledProductPrice,
  StyledPriceContainer,
  StyledPriceLabel,
  StyledButtonCTA,
  StyledAttributesContainer,
  StyledAttributeName,
  InputContainer,
  StyledAttributeInputsContainer,
  RadioButtonLabel,
  RadioButton,
};
