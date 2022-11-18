import { PureComponent } from "react";
import dropdownIconDown from "../../assets/dropdown-btn-down.svg";
import dropdownIconUp from "../../assets/dropdown-btn-up.svg";
import { CurrencyContextConsumer } from "../../context/CurrencyContext";
import {
  StyledDropDownContainer,
  StyledDropDownCurrencyOption,
  StyledDropDownToggler,
  StyledDropDownWrapper,
} from "./style";

export default class DropDown extends PureComponent {
  state = {
    isOptionOpen: false,
    selectedCurrency: localStorage.getItem("currencyIndex") || 0,
    currencies: this.props.prices,
  };

  toggleOverlayVisibility = () => {
    this.setState({ isOptionOpen: !this.state.isOptionOpen });
  };

  changeCurrency = (index) => {
    this.setState({ selectedCurrency: index });
    this.toggleOverlayVisibility();
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
            <StyledDropDownToggler onClick={this.toggleOverlayVisibility}>
             <span> {this.state.currencies[this.state.selectedCurrency].symbol}</span> 
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
