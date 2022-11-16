import styled from "styled-components";
import { PureComponent } from "react";
import dropdownIconDown from "../assets/dropdown-btn-down.svg";
import dropdownIconUp from "../assets/dropdown-btn-up.svg";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
class DropDown extends PureComponent {
  state = {
    isOptionOpen: false,
    selectedCurrency: localStorage.getItem("currencyIndex") || 0,
    currencies: this.props.prices,
  };

  toggleOption = () => {
    this.setState({ isOptionOpen: !this.state.isOptionOpen });
  };

  changeCurrency = (index) => {
    this.setState({ selectedCurrency: index });
    this.toggleOption();
  };

  handleClickOutside = (event) => {
    if (!event.target.closest(".drop-down")) {
      this.setState({ isOptionOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <CurrencyContextConsumer>
        {(context) => (
          <StyledDropDownWrapper className="drop-down">
            <StyledDropDownToggler onClick={this.toggleOption}>
              {this.state.currencies[this.state.selectedCurrency].symbol}
              {this.state.isOptionOpen ? (
                <img
                  src={dropdownIconUp}
                  alt="drop down indicator suggesting that drop down menu is currently open"
                />
              ) : (
                <img
                  src={dropdownIconDown}
                  alt="drop down indicator suggesting that drop down menu is currently closed"
                />
              )}
            </StyledDropDownToggler>

            {this.state.isOptionOpen && (
              <StyledDropDownContainer>
                {this.state.currencies.map((currency, index) => {
                  return (
                    <StyledDropDownCurrencyOption
                      key={index}
                      onClick={() => {
                        context.changeCurrency(index);
                        this.changeCurrency(index);
                      }}
                    >
                      {currency.symbol} {currency.label}
                    </StyledDropDownCurrencyOption>
                  );
                })}
              </StyledDropDownContainer>
            )}
          </StyledDropDownWrapper>
        )}
      </CurrencyContextConsumer>
    );
  }
}

export default DropDown;

const StyledDropDownContainer = styled.div`
  position: absolute;
  left: -20px;
  width: 114px;
  background: #fff;
  padding: 4px 0;
  margin-top: 10px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

const StyledDropDownCurrencyOption = styled.div`
  padding: 13px 0 13px 20px;
  cursor: pointer;
  display: flex;
  width: 100%;
  font-size: 1.125rem;
  font-weight: 500;
  &:hover {
    background: #eee;
  }
`;

const StyledDropDownToggler = styled.div`
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;
const StyledDropDownWrapper = styled.div`
  z-index: 5;
  position: relative;
`;
