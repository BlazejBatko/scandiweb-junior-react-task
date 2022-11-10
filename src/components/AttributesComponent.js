import React, { Component } from "react";
import styled from "styled-components";
export default class AttributesComponent extends Component {
  render() {
    const { attribute, product } = this.props;
    return (
      <StyledAttributesWrapper>
        <p className="product-attribute-label__cart">{attribute.name}</p>
        <StyledAttributesCointainer>
          {attribute.type !== "swatch"
            ? attribute.items.map((item) => (
                <StyledAttributeBox
                  key={item.value}
                  className={
                    Object.values(product.attributes)[
                      Object.keys(product.attributes).indexOf(attribute.name)
                    ] === item.displayValue
                      ? "active-swatch"
                      : ""
                  }
                >
                  <span className="product-attribute-text__cart">
                    {item.value}
                  </span>
                </StyledAttributeBox>
              ))
            : attribute.items.map((item) => (
                <StyledSwatchAttributeBox
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
  background: ${(props) => props.color};
  width: 16px;
  height: 16px;
  border: ${(props) =>
    props.color === "#FFFFFF" ? "1px solid black" : "none"};
`;

const StyledAttributesWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  .active-swatch {
    background: black;
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
  padding: 0 0.2em;
  min-width: 24px;
  min-height: 24px;

  text-align: center;
`;
