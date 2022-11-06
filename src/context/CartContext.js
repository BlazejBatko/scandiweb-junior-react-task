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

  isItemInCart = (id, attributes) => {
    if (this.state.cart.find(element => (JSON.stringify(element.attributes) === JSON.stringify(attributes.attributes) && element.id === id))) {
        
        return "add-to-cart"
    }
    else {
        return "in-cart"
    }
  }
  addToCart = (product) => {
    if (
      this.state.cart.some(
        (element) =>
          JSON.stringify(element.attributes) ===
          JSON.stringify(product.attributes) && element.id === product.id
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

  removeFromCart = (id, attributes) => {
    this.setState({
      cart: this.state.cart.filter((item) => JSON.stringify(item.attributes) !== JSON.stringify(attributes) || item.id !== id),
    });
  };

  render() {
    return (
      <Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          isItemInCart: this.isItemInCart,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CartContextProvider, Consumer as CartContextConsumer };
