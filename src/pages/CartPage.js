import React, { Component } from "react";
import CartProductCard from "../components/CartProductCard";
import { CartContextConsumer } from "../context/CartContext";
import CartFooter from "../components/CartFooter";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default class CartPage extends Component {
  render() {
    return (
      <section>
        <StyledHeadline>Cart</StyledHeadline>
        <CartContextConsumer>
          {({ cart, getTotalInCartItemsQuantity, getTotalPrice }) => (
            <>
              {getTotalInCartItemsQuantity > 0 ? (
                <>
                  {cart.map((product, index) => (
                    <CartProductCard
                      cartPage
                      key={index}
                      product={product}
                      index={index}
                      cart={cart}
                    />
                  ))}

                  <CartFooter
                    quantity={getTotalInCartItemsQuantity}
                    total={getTotalPrice}
                  />

                </>
              ) : (
                <StyledEmptyCartContainer>
                  <span>  Your cart is empty &nbsp; (´。＿。｀)</span>
                  <Link to="/">
                    <StyledShopNowBtn> Shop now </StyledShopNowBtn>
                  </Link>
                </StyledEmptyCartContainer>
              )}
            </>
          )}
        </CartContextConsumer>
      </section>
    );
  }
}

const StyledShopNowBtn = styled.button`
   
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  background: #5ece7b;
  padding: .8em 2em;
  border: none;
  transition: all 0.3s ease-in-out;
  
  &:hover, &:active, &:focus {
    background: #429c5a;
    cursor: pointer;
  }
 
`;

const StyledEmptyCartContainer = styled.div`
  margin-top: 40px;
  font-size: 2rem;
  gap: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledHeadline = styled.h1`
  border-bottom: 1px solid #e5e5e5;
  font-size: 2rem;
  padding-bottom: 2em;
  font-weight: 700;
  text-transform: uppercase;
`;
