import React, { PureComponent } from "react";
import styled from "styled-components";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
import { CartContextConsumer } from "../context/CartContext";
import { withRouter } from "react-router-dom";
import emptyCartIcon from "../assets/empty-cart-white.svg";
class ProductCard extends PureComponent {
  state = {
    addToCartBadgeVisible: false,
  };

  handleMouseOver = () => {
    this.setState({ addToCartBadgeVisible: true });
  };

  handleMouseOut = () => {
    this.setState({ addToCartBadgeVisible: false });
  };

  addedToCartAnimation = () => {
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.classList.add("cart-icon-animation");
    setTimeout(() => {
      cartIcon.classList.remove("cart-icon-animation");
    }, 300);
  };

  render() {
    const { inStock, id, prices, name, gallery, attributes } =
      this.props.product;

    const atr = attributes.map((attribute) => ({
      [attribute.name]: attribute.items[0].displayValue,
    }));

    const defaultAttributesObj = Object.assign({}, ...atr);

    return (
      <StyledProduct
        onClick={(e) =>
          e.target.id !== "add-to-cart-btn" &&
          e.target.id !== "cart-icon" &&
          this.props.history.push("/" + this.props.product.id)
        }
        available={inStock}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <StyledProductImageContainer available={inStock}>
          {!inStock || !this.state.addToCartBadgeVisible ? null : (
            <CartContextConsumer>
              {({ addToCart }) => (
                <StyledAddToCartBadge
                  id="add-to-cart-btn"
                  onClick={() => {
                    addToCart({
                      data: this.props,
                      quantity: 1,
                      id: id,
                      attributes: defaultAttributesObj,
                    });
                    this.addedToCartAnimation();
                  }}
                >
                  <img id="cart-icon" src={emptyCartIcon} alt="" />
                </StyledAddToCartBadge>
              )}
            </CartContextConsumer>
          )}
          <StyledProductCoverImage src={gallery[0]} alt={name} />
        </StyledProductImageContainer>
        <StyledProductNameLabel> {name}</StyledProductNameLabel>
        <CurrencyContextConsumer>
          {({ currencyIndex }) => (
            <StyledProductPriceLabel>
              {prices[currencyIndex].currency.symbol}
              {prices[currencyIndex].amount}
            </StyledProductPriceLabel>
          )}
        </CurrencyContextConsumer>
      </StyledProduct>
    );
  }
}
export default withRouter(ProductCard);

const StyledProductPriceLabel = styled.h3`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 160%;
`;
const StyledProductNameLabel = styled.h2`
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 160%;
`;

const StyledAddToCartBadge = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: green;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -20px;
  right: 50px;
  transition: all 0.3s ease-in-out;

  .cart-icon-animation {
    animation: addToCart 0.3s ease-in-out reverse;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background: #303030;
  }

  @keyframes addToCart {
    0% {
      position: absolute;
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(0px, -10px);
    }

    100% {
      position: absolute;
      transform: translate(0px, 0px);
    }
  }
`;

const StyledProductImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  ${(props) =>
    !props.available &&
    `
    &::after {
      position: absolute;
      content: "Out of stock";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 400;
      font-size: 1.5em;
      text-transform: uppercase;
      text-shadow: 1px 1px 1px #fff;
    }
  `}
`;
const StyledProduct = styled.div`
  padding: 1em;
  position: relative;

  ${({ available }) => !available && ` opacity: 0.5;`}

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

const StyledProductCoverImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  object-position: center;
  margin-bottom: 1.5em;
`;
