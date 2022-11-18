import React, { PureComponent } from "react";
import {
  StyledAttributeBox,
  StyledAttributeBoxText,
  StyledAttributeNameLabel,
  StyledAttributesContainer,
  StyledAttributesWrapper,
  StyledSwatchAttributeBox,
} from "./style";

export default class ProductAttributes extends PureComponent {
  render() {
    const { attribute, product, isOnCartPage } = this.props;
    return (
      <StyledAttributesWrapper>
        <StyledAttributeNameLabel isOnCartPage={isOnCartPage}>
          {attribute.name}:
        </StyledAttributeNameLabel>
        <StyledAttributesContainer>
          {attribute.type !== "swatch"
            ? attribute.items.map((item) => (
                <StyledAttributeBox
                  isOnCartPage={isOnCartPage}
                  key={item.value}
                  className={
                    Object.values(product.attributes)[
                      Object.keys(product.attributes).indexOf(attribute.name)
                    ] === item.displayValue
                      ? "selected-swatch"
                      : ""
                  }
                >
                  <StyledAttributeBoxText isOnCartPage={isOnCartPage}>
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
                      ? "selected"
                      : ""
                  }
                  color={item.value}
                />
              ))}
        </StyledAttributesContainer>
      </StyledAttributesWrapper>
    );
  }
}
