import React, { Component } from "react";
import emptyCartIcon from "../assets/empty-cart.svg";
import styled from "styled-components";
import { CartContextConsumer } from "../context/CartContext";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
export default class MiniCart extends Component {
  state = {
    overlayOpen: false,
    quantity: 1,
  };

  toggleOverlay = () => {
    this.setState({ overlayOpen: !this.state.overlayOpen });
    document.querySelector("#app-wrapper").classList.toggle("overlay-open");
  };

  render() {
    return (
      <StyledMiniCart className="mini-cart">
        <CartContextConsumer>
          {({
            cart,
            removeFromCart,
            changeProductQuantity,
            getTotalItemsQuantity,
            getTotalPrice,
          }) => (
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
                    <> 
                  
                  <StyledOverlayContent className="overlay-content">
                    <div className="overlay-header">
                      <span className="my-bag-label-text__cart ">My Bag, <span className="my-bag-items-count__cart"> {cart.length} {cart.length > 1 ? "items" : "item"}</span></span>
                    </div>
                    <StyledCartProductsContainer className="">
                      {cart.map((product, index) => (
                        <>
                          <StyledMiniCartBody className="overlay-body">
                            <StyledDataInfoCol>
                              <p className="product-brand__cart">
                                {product.data.product.brand}
                              </p>
                              <p className="product-name__cart">
                                {product.data.product.name}
                              </p>
                              <CurrencyContextConsumer>
                                {({ currencyIndex }) => (
                                  <StyledPriceContainer>
                                    <p className="product-price__cart">
                                      {
                                        product.data.product.prices[
                                          currencyIndex
                                        ].currency.symbol
                                      }
                                    </p>
                                    <p className="product-price__cart">
                                      {
                                        product.data.product.prices[
                                          currencyIndex
                                        ].amount
                                      }
                                    </p>
                                  </StyledPriceContainer>
                                )}
                              </CurrencyContextConsumer>

                              {product.data.product.attributes.map(
                                (attribute) => (
                                  <>
                                    <StyledAttributesWrapper>
                                      <p className="product-attribute-label__cart">
                                        {attribute.name}
                                      </p>
                                      <StyledAttributesCointainer>
                                        {attribute.type !== "swatch"
                                          ? attribute.items.map((item) => (
                                              <StyledAttributeBox
                                                className={
                                                  Object.values(
                                                    product.attributes
                                                  )[
                                                    Object.keys(
                                                      product.attributes
                                                    ).indexOf(attribute.name)
                                                  ] === item.displayValue
                                                    ? "active-swatch"
                                                    : ""
                                                }
                                              >
                                                <span className="product-attribute-text__cart">
                                                  {" "}
                                                  {item.value}{" "}
                                                </span>
                                              </StyledAttributeBox>
                                            ))
                                          : attribute.items.map((item) => (
                                              <StyledSwatchAttributeBox
                                                className={
                                                  Object.values(
                                                    product.attributes
                                                  )[
                                                    Object.keys(
                                                      product.attributes
                                                    ).indexOf(attribute.name)
                                                  ] === item.displayValue
                                                    ? "active"
                                                    : ""
                                                }
                                                color={item.value}
                                              />
                                            ))}
                                      </StyledAttributesCointainer>
                                    </StyledAttributesWrapper>
                                  </>
                                )
                              )}
                            </StyledDataInfoCol>
                            <StyledQuantityCol>
                              <StyledQuantityBtn
                                onClick={() =>
                                  changeProductQuantity(product, 1)
                                }
                              >
                                +
                              </StyledQuantityBtn>
                              <h3>{this.props.cart[index].quantity}</h3>
                              <StyledQuantityBtn
                                onClick={() =>
                                  this.props.cart[index].quantity > 1
                                    ? changeProductQuantity(product, -1)
                                    : removeFromCart(
                                        product.id,
                                        product.attributes
                                      )
                                }
                              >
                                -
                              </StyledQuantityBtn>
                            </StyledQuantityCol>
                            <StyledDataGalleryCol>
                              <img src={product.data.product.gallery[0]} alt="" />
                            </StyledDataGalleryCol>
                          </StyledMiniCartBody>
                        </>
                      ))}
                    </StyledCartProductsContainer>
                    <StyledOverlayFooter className="overlay-footer">
                      <StyledTotalPriceContainer>
                        <span className="product-total-price-label__cart "> Total Price</span>
                        <CurrencyContextConsumer>
                          {({ currencyIndex }) => (
                            <span className="product-total-price-value__cart"> {getTotalPrice(currencyIndex)} </span>
                          )}
                        </CurrencyContextConsumer>
                      </StyledTotalPriceContainer>
                      <div>
                        <StyledOverlayFooterCTA>
                          view bag
                        </StyledOverlayFooterCTA>
                        <StyledOverlayFooterCTA checkout>
                          checkout
                        </StyledOverlayFooterCTA>
                      </div>
                    </StyledOverlayFooter>
                  </StyledOverlayContent>
                  </>
                  ) : <StyledOverlayContentEmpty >
                     <span>Your cart is empty </span>
                     <span>(´。＿。｀) </span>
                     </StyledOverlayContentEmpty>}
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


const StyledAttributeBox = styled.div`
  border: 1px solid black;
  padding: 0.5em;

  text-align: center;
`;

const StyledQuantityCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
const StyledQuantityBtn = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background: white;
  color: black;
  font-size: 1.2rem;
`;

const StyledOverlayFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 0.25em;
`;
const StyledAttributesWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  .active-swatch {
    background: black;
    color: white;
  }
  .active {
    outline: 1px solid #5ece7b;
    outline-offset: 1px;
  }
`;

const StyledSwatchAttributeBox = styled.div`
  background: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border: ${(props) =>
    props.color === "#FFFFFF" ? "1px solid black" : "none"};
`;
const StyledPriceContainer = styled.div`
  display: flex;
`;

const StyledDataInfoCol = styled.div`
  flex: 1;
`;
const StyledDataGalleryCol = styled.div`
  flex: 1;
  min-width: 100px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
const StyledMiniCart = styled.div`
  position: relative;
`;
const StyledAttributesCointainer = styled.div`
  display: flex;
  gap: 1em;
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
  width: 500px;
  padding: 2em;
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
`

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
const StyledMiniCartBody = styled.div`
  display: flex;
  margin: 3em 0;
`;
