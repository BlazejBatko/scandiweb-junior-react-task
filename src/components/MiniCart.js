import React, { Component } from "react";
import emptyCartIcon from "../assets/empty-cart.svg";
import styled from "styled-components";
import { CartContextConsumer } from "../context/CartContext";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";
export default class MiniCart extends Component {
  state = {
    overlayOpen: false,
  };

  toggleOverlay = () => {
    this.setState({ overlayOpen: !this.state.overlayOpen });
    document.querySelector("#app-wrapper").classList.toggle("overlay-open");
  };

  render() {
    return (
      <StyledMiniCart className="mini-cart">
        <CartContextConsumer>
          {({ cart, getTotalItemsQuantity, getTotalPrice }) => (
            <>
              <StyledCartIconContainer
                length={getTotalItemsQuantity}
                className="cart-icon"
                onClick={this.toggleOverlay}
              >
                <img src={emptyCartIcon} alt="emptycart" />
              </StyledCartIconContainer>

              {this.state.overlayOpen && (
                <>
                  <StyledOverlay className="overlay"></StyledOverlay>
                  {cart.length > 0 ? (
                    <StyledOverlayContent className="overlay-content">
                      <div className="overlay-header">
                        <span className="my-bag-label-text__cart ">
                          My Bag, 
                          <span className="my-bag-items-count__cart">
                            {cart.length} {cart.length > 1 ? "items" : "item"}
                          </span>
                        </span>
                      </div>
                      <StyledCartProductsContainer>
                        {cart.map((product, index) => (
                          <CartProductCard
                            key={index}
                            product={product}
                            index={index}
                            {...this.props}
                          />
                        ))}
                      </StyledCartProductsContainer>
                      <StyledOverlayFooter className="overlay-footer">
                        <StyledTotalPriceContainer>
                          <span className="product-total-price-label__cart ">
                            Total Price
                          </span>
                          <CurrencyContextConsumer>
                            {({ currencyIndex }) => (
                              <span className="product-total-price-value__cart">
                                {getTotalPrice(currencyIndex)}
                              </span>
                            )}
                          </CurrencyContextConsumer>
                        </StyledTotalPriceContainer>
                        <div>
                          <Link to="/cart" onClick={this.toggleOverlay}>
                            <StyledOverlayFooterCTA>
                              view bag
                            </StyledOverlayFooterCTA>
                          </Link>
                          <StyledOverlayFooterCTA checkout>
                            checkout
                          </StyledOverlayFooterCTA>
                        </div>
                      </StyledOverlayFooter>
                    </StyledOverlayContent>
                  ) : (
                    <StyledOverlayContentEmpty>
                      <span>Your cart is empty </span>
                      <span>(´。＿。｀) </span>
                    </StyledOverlayContentEmpty>
                  )}
                </>
              )}
            </>
          )}
        </CartContextConsumer>
      </StyledMiniCart>
    );
  }
}

const StyledTotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0;
`;
const StyledCartIconContainer = styled.div`
  position: relative;

  ${({ length }) =>
    length > 0 &&
    `

  &::before {
    content: "${length}";
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    width: 20px;
    font-size: 14px;
    top: -11px;
    right: -11px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
  }
  
  `}

  &:hover {
    cursor: pointer;
  }
`;


const StyledOverlayFooterCTA = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: 1px solid black;
  padding: 0.5em 0.5em;
  width: 50%;

  ${(props) =>
    props.checkout ? "color: white; background: #5ECE7B; border: none;" : ""};
`;

const StyledOverlayFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 0.25em;
`;

const StyledMiniCart = styled.div`
  position: relative;
`;

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 69px;
  right: 0;
  bottom: 0;
  background: rgba(57, 55, 72, 0.22);
  z-index: 1;
`;

const StyledOverlayContent = styled.div`
  top: 50px;
  padding: 1em;
  right: 0;
  position: absolute;
  z-index: 2;
  background: white;
`;

const StyledOverlayContentEmpty = styled(StyledOverlayContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const StyledCartProductsContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
