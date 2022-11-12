import React, {Component} from "react";

const {Provider, Consumer} = React.createContext()

class CurrencyContextProvider extends Component {
 state = {
   currencyIndex:localStorage.getItem("currencyIndex") || 0,
 }

 changeCurrency = (index) => {
   this.setState({ currencyIndex: index });
   localStorage.setItem("currencyIndex", index);
 }
 
 render() {
    return (
      <Provider value={{currencyIndex: this.state.currencyIndex, changeCurrency: this.changeCurrency}}>
         {this.props.children}
      </Provider>
    )
 }

}


export {CurrencyContextProvider, Consumer as CurrencyContextConsumer}