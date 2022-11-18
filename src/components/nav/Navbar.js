import React, { PureComponent } from "react";
import MiniCart from "../miniCart/MiniCart";
import CurrencyDropDown from "../currencyDropDown/CurrencyDropDown";
import { NavLink } from "react-router-dom";
import { LOAD_CATEGORIES, GET_AVAILABLE_PRICES } from "../../graphQL/queries";
import { Query } from "@apollo/client/react/components";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import logoIcon from "../../assets/a-logo.svg";
import {
  StyledLogoImg,
  StyledNavbarItemsContainer,
  StyledUl,
} from "./style";

class Navbar extends PureComponent {
  render() {
 
    console.log(this.props.match)
    return (
      <header>
        <StyledUl>
          <StyledNavbarItemsContainer>
            <Query query={LOAD_CATEGORIES}>
              {({ loading, data, error }) => {
                if (loading) return <span>Loading</span>;
                if (error) return <span>something went wrong :(</span>;
                if (data.categories) {
                  return data.categories.map((category) => (
                    <StyledNavLink  key={category.name} to={"/" + category.name}>

                        {category.name}
                      
                    </StyledNavLink>
                  ));
                }
              }}
            </Query>
          </StyledNavbarItemsContainer>

          <StyledLogoImg src={logoIcon} alt="e commerce store logo" />

          <Query query={GET_AVAILABLE_PRICES}>
            {({ loading, data, error }) => {
              if (loading) return <span>Loading</span>;
              if (error) return <span>something went wrong :( </span>;
              if (data) {
                return (
                  <StyledNavbarItemsContainer>
                    <CurrencyDropDown prices={data.currencies} />
                    <MiniCart />
                  </StyledNavbarItemsContainer>
                );
              }
            }}
          </Query>
        </StyledUl>
      </header>
    );
  }
}

export default withRouter(Navbar);


const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;

  &.active {
    position: relative;
    color: #5ECE7B;
    font-weight: 600;

    &::after {
      content: "";
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      width: 120%;
      height: 2px;
      background: #5ECE7B;
      
    }
  }
  
`