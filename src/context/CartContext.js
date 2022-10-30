import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class CartContextProvider extends Component {
  state = {
    cart: [],
  };

  addToCart = (product) => {
    this.setState({ cart: [...this.state.cart, product] });
  };

  removeFromCart = (id) => {
    this.setState({
      cart: this.state.cart.filter((item) => item[0].product.id !== id),
    });
  };

  render() {
    return (
      <Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CartContextProvider, Consumer as CartContextConsumer };
