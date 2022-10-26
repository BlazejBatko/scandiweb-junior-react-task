import React, { PureComponent } from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'

class CurrencyDropdown extends PureComponent {

    
    state = {
        isOptionOpen: false,
        selectedCurrency: 0
    }

    currenciesList = [
        "USD $",
        "EUR €",
        "JPY ¥"
    ]

    toggleOption = () => {
        this.setState({isOptionOpen: !this.state.isOptionOpen})
    }




    render() {
      
        return(
            <StyledDropDownWrapper className="wrapper">
                <button className="XD"> XD </button>
                {/* <div className="container">
                    <button
                    type="button"
                    onClick={this.toggleOption}
                    aria-haspopup="listbox"
                    aria-expanded={this.state.isOptionsOpen}>

                        {this.currenciesList[this.state.selectedCurrency]}
                        
                    </button>
                    <ul className={`options ${this.isOptionOpen ? "show" : ""}`}
                    tabIndex={-1}
                    >
                        {this.currenciesList.map((currency, index) => (
                            <li tabIndex={0}> {currency} </li>
                        ))}
                    </ul>
                </div> */}
            </StyledDropDownWrapper>
            
        );
    }
}

export default CurrencyDropdown;

const StyledDropDownWrapper = styled.div`
button {
    background-color: "red";
}
.XD {
  border: 0;
  width: 200px;
  border-radius: 4px;
  background: hotpink;
  width: 100%;
  padding: 6px 8px;
  position: relative;
  text-align: left;
}
/* button {
 
} */

/* .container {
  width: 200px;
}



button:hover {
  cursor: pointer;
}

button::after {
  position: absolute;
  right: 6px;
  top: 4px;
  content: "\2191";
}

button.expanded::after {
  content: "\2193";
}

ul.options {
  border: 1px solid hotpink;
  display: none;
  list-style: none;
  padding: 4px 0;
  margin-top: -4px;
}

ul.show {
  display: block;
}

ul.options li {
  padding: 6px 10px;
}

ul.options li:active,
ul.options li:focus,
ul.options li:hover,
ul.options li[aria-selected="true"] {
  background: pink;
  cursor: pointer;
} */

`