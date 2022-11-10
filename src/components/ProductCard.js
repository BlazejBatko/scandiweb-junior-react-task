import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
import emptyCartIcon from "../assets/empty-cart-white.svg";
import { CartContextConsumer } from "../context/CartContext";
import { withRouter } from "react-router-dom";
class ProductCard extends Component {
  state = {
    addToCartBadgeVisible: false,
  };

  handleMouseOver = () => {
    this.setState({ addToCartBadgeVisible: true });
  };

  handleMouseOut = () => {
    this.setState({ addToCartBadgeVisible: false });
  };

  ani = () => {
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.classList.add("cart-icon-animation");
    setTimeout(() => {
      cartIcon.classList.remove("cart-icon-animation");
    }, 300);

  }

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
                    this.ani();
                  }}
                >
                  <img id="cart-icon" src={emptyCartIcon} alt="" />{" "}
                </StyledAddToCartBadge>
              )}
            </CartContextConsumer>
          )}
          <img
            className="product-cover__category"
            src={gallery[0]}
            alt={name}
          />
        </StyledProductImageContainer>
        <h1 className="product-name__category"> {name}</h1>
        <CurrencyContextConsumer>
          {({ currencyIndex }) => (
            <h2 className="product-price__category">
              {" "}
              {prices[currencyIndex].currency.symbol}
              {prices[currencyIndex].amount}{" "}
            </h2>
          )}
        </CurrencyContextConsumer>
      </StyledProduct>
    );
  }
}
export default withRouter(ProductCard);

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
        transform: translate(   0px, 0px);
    }

    50% {
        transform: translate(   0px, -10px);
    }

    100% {
        position: absolute;
        transform: translate(   0px, 0px);
        
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
      font-family: 'Raleway', sans-serif;
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
 
  ${(props) =>
    !props.available &&
    `
  opacity: 0.5;
  
`}

  .product-cover__category {
    width: 100%;
    height: 500px;
    object-fit: contain;
    object-position: center;
    margin-bottom: 1.5em;
  }

  

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
