import React, { Component } from "react";
import emptyCartIcon from "../assets/empty-cart.svg";
import styled from "styled-components";
import { CartContextConsumer } from "../context/CartContext";
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
        <img onClick={this.toggleOverlay} src={emptyCartIcon} alt="emptycart" />

        {this.state.overlayOpen && (
          <CartContextConsumer>
            {({ cart, removeFromCart }) => (
              <>
                <StyledOverlay className="overlay"></StyledOverlay>
                <StyledOverlayContent className="overlay-content">
                  <div className="overlay-header">
                    <h3>Items in my bag {cart.length}</h3>
                  </div>
                  {cart.map((product) => (
                    <>
                      <StyledMiniCartBody className="overlay-body">
                        <StyledDataInfoCol>
                          <h1>{product.data.product.brand}</h1>
                          <h1>{product.data.product.name}</h1>
                          <h3>quantity: {product.quantity}</h3>
                          <StyledPriceContainer>
                            <p>
                              {product.data.product.prices[0].currency.symbol}
                            </p>
                            <p>{product.data.product.prices[0].amount}</p>
                          </StyledPriceContainer>
                          <button
                            onClick={() => removeFromCart(product.data.id)}
                          >
                            usun
                          </button>
                          {product.data.product.attributes.map((attribute) => (
                            <>
                              <StyledAttributesWrapper>
                                <p>{attribute.name}</p>
                                <StyledAttributesCointainer>
                                  {attribute.type !== "swatch"
                                    ? attribute.items.map((item) => (
                                        <StyledAttributeBox
                                          className={
                                            Object.values(product.attributes)[
                                              Object.keys(
                                                product.attributes
                                              ).indexOf(attribute.name)
                                            ] === item.displayValue
                                              ? "active-swatch"
                                              : ""
                                          }
                                        >
                                          {item.value}
                                        </StyledAttributeBox>
                                      ))
                                    : attribute.items.map((item) => (
                                        <StyledSwatchAttributeBox
                                          className={
                                            Object.values(product.attributes)[
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
                          ))}
                        </StyledDataInfoCol>
                        <StyledDataGalleryCol>
                          <img src={product.data.product.gallery} alt="" />
                        </StyledDataGalleryCol>
                      </StyledMiniCartBody>
                    </>
                  ))}
                </StyledOverlayContent>
              </>
            )}
          </CartContextConsumer>
        )}
      </StyledMiniCart>
    );
  }
}

const StyledAttributeBox = styled.div`
  border: 1px solid black;
  padding: 0.25em;
`;

const StyledAttributesWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  .active-swatch{
    
    background: black;
    color: white;
  }
  .active {
    outline: 1px solid #5ECE7B;
    outline-offset: 1px;
  }
`;

const StyledSwatchAttributeBox = styled.div`
  background: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border: ${(props) =>
    props.color === "#FFFFFF" ? "1px solid black" : "none"};
`;
const StyledPriceContainer = styled.div`
  display: flex;

 
`;

const StyledDataInfoCol = styled.div`
  flex: 2;
`;
const StyledDataGalleryCol = styled.div`
  flex: 1;
  min-width: 100px;
  img {
    height: 100%;
    object-fit: contain;
  }
`;
const StyledMiniCart = styled.div`
  position: relative;
  img {
    cursor: pointer;
  }
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

  height: 400px;
  overflow-y: auto;
  padding: 2em;
  right: 0;
  position: absolute;
  z-index: 2;
  background: white;
`;

const StyledMiniCartBody = styled.div`
  display: flex;
`;
