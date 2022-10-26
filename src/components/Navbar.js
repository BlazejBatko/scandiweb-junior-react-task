import React, { PureComponent } from "react";
import {Link} from 'react-router-dom'
import { LOAD_CATEGORIES } from "../GraphQL/Queries";
import styled from 'styled-components'
import logoIcon from '../assets/a-logo.svg'
import emptyCartIcon from '../assets/empty-cart.svg'
import { Query } from "@apollo/client/react/components";
import CurrencyDropdown from "./CurrencyDropdown";
class Navbar extends PureComponent {
  
  show(img) {
    img.classList.toggle("")
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

          <div className="flex-column">
          </div>
          <CurrencyDropdown />
          <img src={emptyCartIcon} alt="emptycart"/>
       </StyledNavbar>
      </nav>
      
    );
  }
}

export default Navbar;

const StyledNavbar = styled.ul `

  padding: 1.75em 0;
  list-style: none;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
  
li {
  color: #1D1F22;
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
`
