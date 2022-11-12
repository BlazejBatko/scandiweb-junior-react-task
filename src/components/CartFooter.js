import React, { Component } from "react";
import styled from "styled-components";
import { CurrencyContextConsumer } from "../context/CurrencyContext";

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

const StyledCartFooterContainer = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5em;
  margin-top: 2em;
`;

const StyledTextInfo = styled.span`
font-weight: 400;
font-size: 1.5rem;
`

const StyledTextTotal = styled.span`
font-weight: 500px;
font-size: 1.5rem;
`
const StyledValueInfo = styled.span` 
font-weight: 700;
font-size: 1.5rem;
`
const StyledOrderCTA = styled.button`

border: none;
color: #fff;
background-color: #5ECE7B;
width: 280px;
height: 43px;
margin-top: 1em;

&:hover {
    cursor: pointer;
    transform: scale(1.02);
}
`