import React, { PureComponent } from "react";
import MiniCart from "../miniCart/MiniCart";
import CurrencyDropDown from "../currencyDropDown/CurrencyDropDown";
import { NavLink } from "react-router-dom";
import { LOAD_CATEGORIES, GET_AVAILABLE_PRICES } from "../../graphQL/queries";
import { Query } from "@apollo/client/react/components";
import { withRouter } from "react-router-dom";
import logoIcon from "../../assets/a-logo.svg";
import {
  StyledLogoImg,
  StyledNavbarItemsContainer,
  StyledNavLink,
  StyledUl,
} from "./style";

class Navbar extends PureComponent {
  render() {
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
                    <StyledNavLink key={category.name} to={"/" + category.name}>
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
