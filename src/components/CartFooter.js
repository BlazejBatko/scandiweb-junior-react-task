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
              <p> Tax 21%: </p>
              <p>
                {" "}
                {(Number(total(currencyIndex).slice(0, -1)) * 0.21).toFixed(2)}
              </p>

              <p> Quantity: </p>
              <p> {quantity} </p>

              <p> Total: </p>
              <p> {total(currencyIndex)} </p>
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
  grid-template-columns: 80px auto;
  grid-template-rows: 1fr 1fr 1fr;
`;

const StyledOrderCTA = styled.button`

border: none;
color: #fff;
background-color: #5ECE7B;
width: 17.5em;
height: 2.7rem;

&:hover {
    cursor: pointer;
    transform: scale(1.02);
}
`