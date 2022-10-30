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
                    <h3>My Bag {cart.length}</h3>
                  </div>
                  {cart.map((item, index) => (
                    <>
                        <StyledMiniCartBody className="overlay-body">
                        
                          <StyledProductInfoCol>
                              <h1>{item[0].product.brand}</h1>
                              <h1>{item[0].product.name}</h1>
                              <StyledPriceContainer>
                                <p>{item[0].product.prices[0].currency.symbol}</p>
                                <p>{item[0].product.prices[0].amount}</p>
                              </StyledPriceContainer>
                              <button
                                onClick={() => removeFromCart(item[0].product.id)}
                              >
                                {" "}
                                usun{" "}
                              </button>
                              {item[0].product.attributes.map((attribute) => (
                                <>
                                  <StyledAttributesWrapper>
                                    <p>{attribute.name}</p>
                                    <StyledAttributesCointainer>
                                      {attribute.type !== "swatch"
                                        ? attribute.items.map((item) => <StyledAttributeBox>{item.value}</StyledAttributeBox>)
                                        : attribute.items.map((item) => (
                                            <StyledSwatchAttributeBox color={item.value}/>
                                          ))}
                                    </StyledAttributesCointainer>
                                  </StyledAttributesWrapper>
                                </>
                              ))}
                          </StyledProductInfoCol>
                           <StyledProductGalleryCol><img src={item[0].product.gallery[0]} alt="" /></StyledProductGalleryCol>
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
padding: .25em;
`

const StyledAttributesWrapper = styled.div`
margin-top: 1em;
display: flex;
flex-direction: column;
gap: 1em;
`

const StyledSwatchAttributeBox = styled.div`
background: ${props => props.color};
width: 30px;
height: 30px;
border: ${props => props.color === "#FFFFFF" ? "1px solid black" : "none"};
`
const StyledPriceContainer = styled.div`
display: flex;
`

const StyledProductInfoCol = styled.div`
 flex: 2;
 
`
const StyledProductGalleryCol = styled.div`
 flex: 1;
 min-width: 100px;
 img {
  height: 100%;
  object-fit: contain;
 }
`
const StyledMiniCart = styled.div`
  position: relative;
  img {
    cursor: pointer;
  }
`;
const StyledAttributesCointainer = styled.div`
  display: flex;
  gap: 1em;
`
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
`
