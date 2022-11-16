import React, { PureComponent } from "react";
import styled from "styled-components";
import MiniCart from "./MiniCart";
import DropDown from "./CurrencyDropDown";
import { Link } from "react-router-dom";
import { LOAD_CATEGORIES, GET_AVAILABLE_PRICES } from "../GraphQL/Queries";
import { Query } from "@apollo/client/react/components";
import { withRouter } from "react-router-dom";
import logoIcon from "../assets/a-logo.svg";

class Navbar extends PureComponent {
  render() {
    const location = this.props.location.pathname.slice(1);

    return (
      <nav>
        <StyledNavbar>
          <StyledNavbarItemsContainer>
            <Query query={LOAD_CATEGORIES}>
              {({ loading, data, error }) => {
                if (loading) return <div>Loading</div>;
                if (error) return <div>something went wrong :(</div>;
                return data.categories.map((category) => (
                  <Link key={category.name} to={category.name}>
                    <StyledLi
                      active={category.name === location}
                      key={category.name}
                    >
                      {category.name}
                    </StyledLi>
                  </Link>
                ));
              }}
            </Query>
          </StyledNavbarItemsContainer>

          <StyledLogoImg className="logo" src={logoIcon} alt="logo" />

          <Query query={GET_AVAILABLE_PRICES}>
            {({ loading, data, error }) => {
              if (loading) return <div>Loading</div>;
              if (error) return <div>something went wrong :( </div>;
              if (data) {
                return (
                  <StyledNavbarItemsContainer>
                    <DropDown prices={data.currencies} />
                    <MiniCart />
                  </StyledNavbarItemsContainer>
                );
              }
            }}
          </Query>
        </StyledNavbar>
      </nav>
    );
  }
}

export default withRouter(Navbar);

const StyledLogoImg = styled.img`
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: unset;
  }
`;
const StyledLi = styled.li`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;

  ${({ active }) =>
    active &&
    `
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
    `}
`;
const StyledNavbarItemsContainer = styled.div`
  display: flex;
  gap: 2em;
`;
const StyledNavbar = styled.ul`
  padding: 1.75em 0;
  margin-bottom: 5em;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #1D1F22;
  }
`;
