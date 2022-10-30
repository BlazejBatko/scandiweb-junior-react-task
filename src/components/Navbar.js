import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { LOAD_CATEGORIES, GET_AVAILABLE_PRICES } from "../GraphQL/Queries";
import styled from "styled-components";
import logoIcon from "../assets/a-logo.svg";

import { Query } from "@apollo/client/react/components";
import DropDown from "./Dropdown";
import { withRouter } from "react-router-dom";
import MiniCart from "./MiniCart";
class Navbar extends PureComponent {
 


  render() {
    const location = this.props.location.pathname.slice(1)
    
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
                    <li className={category.name === location ? "activeTab" : ""} key={category.name}> {category.name} </li>
                  </Link>
                ));
              }}
            </Query>
          </div>
          <img className="logo" src={logoIcon} alt="logo" />
          <Query query={GET_AVAILABLE_PRICES}>
            {({ loading, data }) => {
              if (loading) return <div>Loading</div>;
              if (data) {
                const { currencies } = data;
                return (
                  <div className="flex-column">
                    <DropDown prices={currencies} />
                    <MiniCart />
                  </div>
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

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {

    .logo {
      position: unset
    }
  }

  .activeTab {
    position: relative;
    color: #5ECE7B;
  }

  .activeTab::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 2px;
    background: #5ECE7B;


  }
  a {
    text-decoration: none;
  }

  .flex-column {
    display: flex;
    gap: 1em;
  }
`;
