import React, { PureComponent } from "react";
import { CartContextConsumer } from "../../context/CartContext";
import { CurrencyContextConsumer } from "../../context/CurrencyContext";
import {
  StyledAttributesContainer,
  StyledAttributeName,
  StyledAttributeInputsContainer,
  InputContainer,
  RadioButton,
  RadioButtonLabel,
  StyledPriceContainer,
  StyledPriceLabel,
  StyledProductPrice,
  StyledButtonCTA,
} from "./styles";

export default class AddToCartForm extends PureComponent {
  ctaBtn = React.createRef();

  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { productObj } = this.props;

    return (
      <CartContextConsumer>
        {(context) => (
          <form
            onSubmit={(e) => {
              context.addToCart({
                data: this.props.data,
                quantity: 1,
                id: productObj.id,
                attributes: this.state,
              });
              e.preventDefault();
            }}
          >
            {productObj.attributes.map((attribute) => {
              return (
                <StyledAttributesContainer key={attribute.name}>
                  <StyledAttributeName>{attribute.name}:</StyledAttributeName>
                  <StyledAttributeInputsContainer>
                    {attribute.items.map((item) => {
                      return (
                        <div key={item.value}>
                          {attribute.type !== "swatch" ? (
                            <InputContainer isSwatch>
                              <RadioButton
                                onChange={this.handleFormChange}
                                required
                                type="radio"
                                isSwatch
                                value={item.displayValue}
                                name={attribute.name}
                              />
                              <RadioButtonLabel isSwatch>
                                {item.value}
                              </RadioButtonLabel>
                            </InputContainer>
                          ) : (
                            <InputContainer>
                              <RadioButton
                                onChange={this.handleFormChange}
                                required
                                type="radio"
                                value={item.displayValue}
                                name={attribute.name}
                              />
                              <RadioButtonLabel
                                color={item.displayValue}
                              ></RadioButtonLabel>
                            </InputContainer>
                          )}
                        </div>
                      );
                    })}
                  </StyledAttributeInputsContainer>
                </StyledAttributesContainer>
              );
            })}
            <StyledPriceContainer>
              <StyledPriceLabel>Price:</StyledPriceLabel>
              <CurrencyContextConsumer>
                {({ currencyIndex }) => (
                  <StyledProductPrice>
                    {productObj.prices[currencyIndex].currency.symbol}
                    {productObj.prices[currencyIndex].amount}
                  </StyledProductPrice>
                )}
              </CurrencyContextConsumer>
            </StyledPriceContainer>
            <CartContextConsumer>
              {(context) => (
                <StyledButtonCTA
                  ref={this.ctaBtn}
                  disabled={!productObj.inStock}
                  content={this.ctaBtn.innerHTML}
                >
                  {productObj.inStock
                    ? context.isItemInCart(this.props.data.product.id, {
                        attributes: this.state,
                      })
                    : "out of stock"}
                </StyledButtonCTA>
              )}
            </CartContextConsumer>
          </form>
        )}
      </CartContextConsumer>
    );
  }
}
