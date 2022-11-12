import React, { Component } from "react";
import emptyCartIcon from "../assets/empty-cart.svg";
import styled from "styled-components";
import { CartContextConsumer } from "../context/CartContext";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
import CartProductCard from "./CartProductCard";
import { withRouter } from "react-router-dom";

class MiniCart extends Component {
  state = {
    isOverlayOpen: false,
  };

  toggleOverlay = () => {
    this.setState({ isOverlayOpen: !this.state.isOverlayOpen });
  };

  goToCartPage = () => {
    this.props.history.push("/cart");
    this.toggleOverlay();
  };

  componentDidUpdate() {
    if (this.state.isOverlayOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }

  handleClickOutside = (event) => {
    if (!event.target.closest(".mini-cart") || event.target.matches(".overlay")) {
      this.setState({ isOverlayOpen: false });
      
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <StyledMiniCart >
        <CartContextConsumer>
          {({ cart, getTotalItemsQuantity, getTotalPrice }) => (
            <div className="mini-cart">
              <StyledCartIconContainer
                length={getTotalItemsQuantity}
                className="cart-icon"
                onClick={this.toggleOverlay}
              >
                <img src={emptyCartIcon} alt="emptycart" />
              </StyledCartIconContainer>
              {this.state.isOverlayOpen && (
                <>
                  <StyledOverlay className="overlay"></StyledOverlay>
                  {cart.length > 0 ? (
                    <StyledOverlayContent >
                      <StyledOverlayHeader>
                        <StyledOverlayHeading>
                          My Bag,{" "}
                          <StyledOverlayHeadingItemsValue>
                            {getTotalItemsQuantity}{" "}
                            {getTotalItemsQuantity > 1 ? "items" : "item"}
                          </StyledOverlayHeadingItemsValue>
                        </StyledOverlayHeading>
                      </StyledOverlayHeader>
                      <StyledCartProductsContainer>
                        {cart.map((product, index) => (
                          <CartProductCard
                            key={index}
                            product={product}
                            index={index}
                            cart={cart}
                          />
                        ))}
                      </StyledCartProductsContainer>
                      <StyledOverlayFooter>
                        <StyledTotalPriceContainer>
                          <StyledTotalPriceText>
                            Total Price
                          </StyledTotalPriceText>
                          <CurrencyContextConsumer>
                            {({ currencyIndex }) => (
                              <StyledTotalPriceValue>
                                {getTotalPrice(currencyIndex)}
                              </StyledTotalPriceValue>
                            )}
                          </CurrencyContextConsumer>
                        </StyledTotalPriceContainer>
                        <StyledButtonsContainer>
                          <StyledOverlayFooterCTA
                            onClick={() => this.goToCartPage()}
                          >
                            view bag
                          </StyledOverlayFooterCTA>

                          <StyledOverlayFooterCTA checkout>
                            checkout
                          </StyledOverlayFooterCTA>
                        </StyledButtonsContainer>
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
            </div>
          )}
        </CartContextConsumer>
      </StyledMiniCart>
    );
  }
}

export default withRouter(MiniCart);

const StyledTotalPriceText = styled.h3`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 1rem;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 0.75em;
  width: 100%;
`;
const StyledTotalPriceValue = styled.span`
  font-weight: 700;
`;
const StyledOverlayHeading = styled.h2`
  font-weight: 700;
  font-size: 1rem;
`;
const StyledOverlayHeadingItemsValue = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

const StyledOverlayHeader = styled.div`
  margin-bottom: 1em;
`;

const StyledTotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  border: 1px solid black;
  padding: 0.7em;
  width: 50%;
  background: white;

  a {
    color: black;
    font-family: "Raleway", sans-serif;
  }
  ${(props) =>
    props.checkout ? "color: white; background: #5ECE7B; border: none;" : ""};
`;

const StyledOverlayFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  row-gap: 2.125em;
  margin-top: 1em;
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
  width: max-content;
`;

const StyledCartProductsContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  padding-right: 8px;
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
