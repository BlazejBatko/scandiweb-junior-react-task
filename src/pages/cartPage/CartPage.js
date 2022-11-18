import React, { Component } from "react";
import CartProductCard from "../../components/product/productCardCart/CartProductCard";
import { CartContextConsumer } from "../../context/CartContext";
import CartFooter from "../../components/cartFooter/CartFooter";
import { Link } from "react-router-dom";
import {
  StyledEmptyCartContainer,
  StyledHeadline,
  StyledShopNowBtn,
} from "./style";

export default class CartPage extends Component {
  render() {
    return (
      <>
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
                  <span> Your cart is empty &nbsp; (´。＿。｀)</span>
                  <Link to="/">
                    <StyledShopNowBtn> Shop now </StyledShopNowBtn>
                  </Link>
                </StyledEmptyCartContainer>
              )}
            </>
          )}
        </CartContextConsumer>
      </>
    );
  }
}
