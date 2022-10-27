import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { LOAD_CATEGORIES, GET_AVAILABLE_PRICES } from "../GraphQL/Queries";
import styled from "styled-components";
import logoIcon from "../assets/a-logo.svg";
import emptyCartIcon from "../assets/empty-cart.svg";
import { Query } from "@apollo/client/react/components";
import DropDown from "./Dropdown";
class Navbar extends PureComponent {

  show(img) {
    img.classList.toggle("");
  }

  render() {
    return (
      <nav>
        <StyledNavbar>
          <div className="flex-column">
            <Query query={LOAD_CATEGORIES}>
              {({ loading, data }) => {
                if (loading) return <div>Loading</div>;
                const { categories } = data;
                return categories.map((category) => (
                    <Link to={category.name}>
                      <li key={category.name}> {category.name} </li>
                    </Link>
                ));
              }}
            </Query>
            </div>
            <img src={logoIcon} alt="logo" />
            <Query query={GET_AVAILABLE_PRICES}>
                { ({loading, data}) => {
                  if (loading) return <div>Loading</div>
                  if (data) {
                    const { currencies } = data;
                    return (
                      <div className="flex-column">
                        <DropDown prices={currencies} />
                        <img src={emptyCartIcon} alt="emptycart" />
                      </div>
                    )
                  }
                }}
            </Query>
          
        </StyledNavbar>
      </nav>
    );
  }
}

export default Navbar;

const StyledNavbar = styled.ul`
  padding: 1.75em 0;
  list-style: none;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;

  li {
    color: #1d1f22;
    text-transform: uppercase;
    font-weight: 600;
  }
  a {
    text-decoration: none;
  }

  .flex-column {
    display: flex;
    gap: 1em;
  }
`;
