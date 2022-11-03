import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class CartContextProvider extends Component {
  state = {
    cart: [],
  };

  containsObject = (obj, list) => {
    return list.some((element) => element === obj);
  };

  arrayContainsObject = (array, object) => {
    return array.some((item) =>
      Object.keys(item).every((key) => item[key] === object[key])
    );
  };
  addToCart = (product) => {
    if (
      this.state.cart.some(
        (element) =>
          JSON.stringify(element.attributes) ===
          JSON.stringify(product.attributes)
      )
    ) {
      const productToUpdate = this.state.cart.find(
        (element) =>
          JSON.stringify(element.attributes) ===
          JSON.stringify(product.attributes)
      );
      let quantity = (productToUpdate.quantity += 1);

      productToUpdate.quantity = quantity;

      //  this.setState(prev => (
      //    {...prev}
    } else {
      this.setState({ cart: [...this.state.cart, product] });
    }
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
