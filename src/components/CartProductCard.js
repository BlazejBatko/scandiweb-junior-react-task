import React, { Component } from "react";
import styled from "styled-components";
import { CartContextConsumer } from "../context/CartContext";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
import AttributesComponent from "./AttributesComponent";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
export default class CartProductCard extends Component {
    state = {
        currentPhotoIndex: 0,
    }

    changeCurrentPhotoIndex = (index) => {
        this.setState({
            currentPhotoIndex:
                (this.state.currentPhotoIndex + index + this.props.product.data.product.gallery.length) %
                this.props.product.data.product.gallery.length,
        });
    }
  render() {
    const { brand, name, prices, attributes, gallery } =
      this.props.product.data.product;
      const { cartPage } = this.props;
    return (
      <CartContextConsumer>
        {({ removeFromCart, changeProductQuantity }) => (
          <StyledCartProductCard isOnCartPage={cartPage}>
            <StyledDataInfoCol isOnCartPage={cartPage}>
              <p className={cartPage ? "product-brand__cart__page" : "product-brand__cart"}>{brand}</p>
              <p className={cartPage ? "product-name__cart__page" : "product-name__cart"}> {name}</p>
              <CurrencyContextConsumer>
                {({ currencyIndex }) => (
                  <StyledPriceContainer>
                    <p className={cartPage ? "product-price__cart__page" : "product-price__cart"} >
                      {prices[currencyIndex].currency.symbol}
                    </p>
                    <p className={cartPage ? "product-price__cart__page" : "product-price__cart"}>
                      {prices[currencyIndex].amount}
                    </p>
                  </StyledPriceContainer>
                )}
              </CurrencyContextConsumer>

              {attributes.map((attribute) => (
                <AttributesComponent
                  attribute={attribute}
                  product={this.props.product}
                  key={attribute.name}
                />
              ))}
            </StyledDataInfoCol>
            <StyledDataGalleryCol isOnCartPage={cartPage}>
            <StyledQuantityCol>
              <StyledQuantityBtn
                isOnCartPage={cartPage}
                onClick={() => changeProductQuantity(this.props.product, 1)}
              >
                +
              </StyledQuantityBtn>
              <h3>{this.props.cart[this.props.index].quantity}</h3>
              <StyledQuantityBtn
                isOnCartPage={cartPage}
                onClick={() =>
                  this.props.cart[this.props.index].quantity > 1
                    ? changeProductQuantity(this.props.product, -1)
                    : removeFromCart(
                        this.props.product.id,
                        this.props.product.attributes
                      )
                }
              >
                -
              </StyledQuantityBtn>
            </StyledQuantityCol>
              <StyledImageContainer isOnCartPage={cartPage} ><img src={gallery[this.state.currentPhotoIndex]} alt="" /></StyledImageContainer>
        {!this.props.cartPage || gallery.length < 2? null : (
             
              <StyledCarouselContainer>
                  <StyledPhotoIndexBtn onClick={() => this.changeCurrentPhotoIndex(1)}> <img src={arrowLeft} alt="" /> </StyledPhotoIndexBtn>
                  <StyledPhotoIndexBtn onClick={() => this.changeCurrentPhotoIndex(-1)}><img src={arrowRight} alt="" /></StyledPhotoIndexBtn>
              </StyledCarouselContainer>
              
              )}
            </StyledDataGalleryCol>
          </StyledCartProductCard >
        )}
      </CartContextConsumer>
    );
  }
}

const StyledPhotoIndexBtn = styled.button`
border: none;
display: flex;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
background: rgba(0, 0, 0, 0.73);
color: white;
&:hover {
    transform: scale(1.1);
    img {
        transform: scale(1.1);
    }
}



`

const StyledImageContainer = styled.div`
img {
  max-width:  ${({isOnCartPage}) => isOnCartPage ? "200px" : "100%"};
}
`
const StyledCarouselContainer = styled.div`
display: flex;
gap: 8px;
position: absolute;
bottom: 10px;
right: 10px;
`
const StyledCartProductCard = styled.div`
  display: flex;
  margin: 3em 0;
  gap: 8px;
  
  ${({ isOnCartPage }) => isOnCartPage && `
  justify-content: space-between;
  border-bottom: 1px solid #E5E5E5;
  margin: 1.5em 0;
  padding-bottom: 1.5em;
  `}
  
`;

const StyledDataInfoCol = styled.div`
  min-width: ${({ isOnCartPage}) => isOnCartPage ? "" : "200px"};
   
    
`;
const StyledDataGalleryCol = styled.div`
  
  position: relative;
  display: flex;    
    align-items: stretch;
    justify-content: center;
  min-width: 150px;
  gap: 8px;
  
    img {
        object-fit: cover;
    }
`;


const StyledQuantityBtn = styled.button`
  cursor: pointer;
 
  border: 1px solid black;
  background: white;
  color: black;
  font-size: 1.2rem;

  ${({ isOnCartPage }) => isOnCartPage ? `width: 45px;
  height: 45px;`: `width: 24px; height: 24px;`}
`;

const StyledQuantityCol = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;

const StyledPriceContainer = styled.div`
  display: flex;
`;
