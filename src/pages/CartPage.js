import React, { Component } from "react";
import CartProductCard from "../components/CartProductCard";
import { CartContextConsumer } from "../context/CartContext";
import CartFooter from "../components/CartFooter";
import styled from "styled-components";
export default class CartPage extends Component {
  render() {
    return (
      <section>
        <StyledHeadline>Cart</StyledHeadline>
        <CartContextConsumer>
          {({ cart, getTotalItemsQuantity, getTotalPrice }) => (
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
               <CartFooter quantity={getTotalItemsQuantity} total={getTotalPrice}/>
            </>
          )}
        </CartContextConsumer>
      </section>
    );
  }
}

const StyledHeadline = styled.h1`
border-bottom: 1px solid #E5E5E5;
font-size: 2rem;
padding-bottom: 2em;
font-weight: 700;
text-transform: uppercase;

`