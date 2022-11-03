import styled, { ThemeContext } from "styled-components";
import { PureComponent } from "react";
import dropdownIconDown from "../assets/dropdown-btn-down.svg";
import dropdownIconUp from "../assets/dropdown-btn-up.svg";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
class DropDown extends PureComponent {


  state = {
    isOptionOpen: false,
    selectedCurrency: 0,
    currencies: this.props.prices,
  };

  toggleOption = () => {
    this.setState({ isOptionOpen: !this.state.isOptionOpen });
  };

  changeCurrency = (index) => {
    this.setState({ selectedCurrency: index });
    this.toggleOption();
  };

  render() {
   
    return (
      <CurrencyContextConsumer>
        {(context) => (
          <StyledDropDownWrapper className="dropdown">
            <div onClick={this.toggleOption} className="dropdown-btn">
              {this.state.currencies[this.state.selectedCurrency].symbol}

              {this.state.isOptionOpen ? (
                <img src={dropdownIconUp} alt="" />
              ) : (
                <img src={dropdownIconDown} alt="" />
              )}
            </div>

            {this.state.isOptionOpen && (
              <div className="dropdown-content">
                {this.state.currencies.map((currency, index) => {
                  return (
                    <div
                      onClick={() => {
                        context.changeCurrency(index);
                        this.changeCurrency(index);
                        
                      }}
                      className="dropdown-item"
                    >
                      
                      <p>{currency.symbol}</p>
                      <p>{currency.label}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </StyledDropDownWrapper>
        )}
      </CurrencyContextConsumer>
    );
  }
}

export default DropDown;

const StyledDropDownWrapper = styled.div`
 width: 40px;
  .dropdown {
    width: 200px;
    position: relative;
  }

  .dropdown-btn {
    
    font-weight: bold;
    color: #333;
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .dropdown-content {
    position: absolute;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    background: #fff;
    padding: 20px 0;
    margin-top: 10px;
  }

  .dropdown-item {
    padding: 13px;
    cursor: pointer;
    display: flex;
    gap: 5px;
  
  }
  .dropdown-item:hover {
    background: #f1f1f1;
  }
`;
