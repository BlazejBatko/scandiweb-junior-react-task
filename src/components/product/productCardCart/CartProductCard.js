import React, { Component } from "react";
import { CartContextConsumer } from "../../../context/CartContext";
import { CurrencyContextConsumer } from "../../../context/CurrencyContext";
import ProductAttributes from "../productAttributes/ProductAttributes";
import arrowLeft from "../../../assets/arrow-left.svg";
import arrowRight from "../../../assets/arrow-right.svg";
import {
  StyledCarouselContainer,
  StyledCartProductCard,
  StyledDataGalleryCol,
  StyledDataInfoCol,
  StyledImageContainer,
  StyledPhotoIndexBtn,
  StyledPriceLabel,
  StyledProductBrand,
  StyledProductName,
  StyledProductQuantity,
  StyledQuantityBtn,
  StyledQuantityCol,
} from "./style";
export default class CartProductCard extends Component {
  state = {
    currentPhotoIndex: 0,
  };

  changeCurrentPhotoIndex = (index) => {
    this.setState({
      currentPhotoIndex:
        (this.state.currentPhotoIndex +
          index +
          this.props.product.data.product.gallery.length) %
        this.props.product.data.product.gallery.length,
    });
  };
  render() {
    const { brand, name, prices, attributes, gallery } =
      this.props.product.data.product;
    const { cartPage } = this.props;

    return (
      <CartContextConsumer>
        {({ removeFromCart, changeProductQuantity }) => (
          <StyledCartProductCard isOnCartPage={cartPage}>
            <StyledDataInfoCol isOnCartPage={cartPage}>
              <StyledProductBrand isOnCartPage={cartPage}>
                {brand}
              </StyledProductBrand>
              <StyledProductName isOnCartPage={cartPage}>
                {name}
              </StyledProductName>
              <CurrencyContextConsumer>
                {({ currencyIndex }) => (
                  <StyledPriceLabel isOnCartPage={cartPage}>
                    {prices[currencyIndex].currency.symbol}
                    {(prices[currencyIndex].amount).toFixed(2)}
                  </StyledPriceLabel>
                )}
              </CurrencyContextConsumer>
              {attributes.map((attribute) => (
                <ProductAttributes
                  isOnCartPage={cartPage}
                  attribute={attribute}
                  product={this.props.product}
                  key={attribute.name}
                />
              ))}
            </StyledDataInfoCol>
            <StyledDataGalleryCol isOnCartPage={cartPage}>
              <StyledQuantityCol isOnCartPage={cartPage}>
                <StyledQuantityBtn
                  isOnCartPage={cartPage}
                  onClick={() => changeProductQuantity(this.props.product, 1)}
                >
                  +
                </StyledQuantityBtn>
                <StyledProductQuantity isOnCartPage={cartPage}>
                  {this.props.cart[this.props.index].quantity}
                </StyledProductQuantity>
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
              <StyledImageContainer isOnCartPage={cartPage}>
                <img src={gallery[this.state.currentPhotoIndex]} alt="" />
                {!this.props.cartPage || gallery.length < 2 ? null : (
                  <StyledCarouselContainer>
                    <StyledPhotoIndexBtn
                      onClick={() => this.changeCurrentPhotoIndex(1)}
                    >
                      <img src={arrowLeft} alt="" />
                    </StyledPhotoIndexBtn>
                    <StyledPhotoIndexBtn
                      onClick={() => this.changeCurrentPhotoIndex(-1)}
                    >
                      <img src={arrowRight} alt="" />
                    </StyledPhotoIndexBtn>
                  </StyledCarouselContainer>
                )}
              </StyledImageContainer>
            </StyledDataGalleryCol>
          </StyledCartProductCard>
        )}
      </CartContextConsumer>
    );
  }
}
