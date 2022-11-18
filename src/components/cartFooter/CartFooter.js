import React, { Component } from "react";
import { CurrencyContextConsumer } from "../../context/CurrencyContext";
import {
  StyledCartFooterContainer,
  StyledOrderCTA,
  StyledTextInfo,
  StyledTextTotal,
  StyledValueInfo,
} from "./style";

export default class CartFooter extends Component {
  render() {
    const { quantity, total } = this.props;
    return (
      <CurrencyContextConsumer>
        {({ currencyIndex }) => (
          <>
            <StyledCartFooterContainer>
              <StyledTextInfo> Tax 21%: </StyledTextInfo>
              <StyledValueInfo>
                {(Number(total(currencyIndex).slice(0, -1)) * 0.21).toFixed(2)}
              </StyledValueInfo>

              <StyledTextInfo> Quantity: </StyledTextInfo>
              <StyledValueInfo> {quantity} </StyledValueInfo>

              <StyledTextTotal> Total: </StyledTextTotal>
              <StyledValueInfo> {total(currencyIndex)} </StyledValueInfo>
            </StyledCartFooterContainer>
            <StyledOrderCTA> ORDER </StyledOrderCTA>
          </>
        )}
      </CurrencyContextConsumer>
    );
  }
}
