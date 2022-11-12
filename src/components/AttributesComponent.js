import React, { Component } from "react";
import styled from "styled-components";
export default class AttributesComponent extends Component {
  render() {
    const { attribute, product, isOnCartPage } = this.props;
    return (
      <StyledAttributesWrapper>
        <StyledAttributeNameLabel isOnCartPage={isOnCartPage}>{attribute.name}:</StyledAttributeNameLabel>
        <StyledAttributesCointainer>
          {attribute.type !== "swatch"
            ? attribute.items.map((item) => (
                <StyledAttributeBox
                  isOnCartPage={isOnCartPage}
                  key={item.value}
                  className={
                    Object.values(product.attributes)[
                      Object.keys(product.attributes).indexOf(attribute.name)
                    ] === item.displayValue
                      ? "active-swatch"
                      : ""
                  }
                >
                  <StyledAttributeBoxText  isOnCartPage={isOnCartPage}>
                    {item.value}
                  </StyledAttributeBoxText>
                </StyledAttributeBox>
              ))
            : attribute.items.map((item) => (
                <StyledSwatchAttributeBox
                isOnCartPage={isOnCartPage}
                 key={item.value}
                  className={
                    Object.values(product.attributes)[
                      Object.keys(product.attributes).indexOf(attribute.name)
                    ] === item.displayValue
                      ? "active"
                      : ""
                  }
                  color={item.value}
                />
              ))}
        </StyledAttributesCointainer>
      </StyledAttributesWrapper>
    );
  }
}

const StyledSwatchAttributeBox = styled.div`
  background: ${({color}) => color};

  border: ${({color}) => color === "#FFFFFF" ? "1px solid black" : "none"};

  ${({ isOnCartPage }) => isOnCartPage ? `
  width: 32px;
  height: 32px;
  ` : `
  width: 16px;
  height: 16px;
  `
  }
`;

const StyledAttributeBoxText = styled.span`
font-weight: 400;
font-family: 'Source Sans Pro';
`

const StyledAttributeNameLabel = styled.h3`

${({ isOnCartPage }) => isOnCartPage ? `
font-weight: 700;
font-family: 'Roboto Condensed';
font-size: 1.125rem;
text-transform: uppercase;
` : `

font-weight: 400;
font-size: 0.875rem;
text-transform: capitalize;
` }

`
const StyledAttributesWrapper = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  .active-swatch {
    background: #1D1F22;
    color: white;
  }
  .active {
    outline: 1px solid #5ece7b;
    outline-offset: 1px;
  }
`;

const StyledAttributesCointainer = styled.div`
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

  ${({ isOnCartPage }) => isOnCartPage ? `
  min-width: 65px;
  height: 45px;
  padding: 0 0.8em;

  ` : `
  padding: 0 0.2em;
  min-width: 24px;
  min-height: 24px;
  ` }
`;
