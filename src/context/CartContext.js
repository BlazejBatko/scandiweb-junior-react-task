import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class CartContextProvider extends Component {
  state = {
    cart: localStorage.getItem("cart") ? (JSON.parse(localStorage.getItem("cart"))).cart : [],
  };

  getTotalInCartItemsQuantity = () => {
    let sum = 0;
    this.state.cart.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  }

  isItemInCart = (id, attributes) => {
    if (this.state.cart.find(element => (JSON.stringify(element.attributes) === JSON.stringify(attributes.attributes) && element.id === id))) {
        
        return "in cart"
    }
    else {
        return "add to cart"
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
       this.changeProductQuantity(product, 1)

    } else {
      this.setState({ cart: [...this.state.cart, product] });
    }
  };

  getTotalPrice = (selectedCurrencyIndex) => {
    let sum = 0;
    let symbol = "";
      this.state.cart.forEach((item) => {
      sum += item.data.product.prices[selectedCurrencyIndex || 0].amount * item.quantity;
      symbol = item.data.product.prices[selectedCurrencyIndex || 0].currency.symbol;
    });
    return sum.toFixed(2) + " " + symbol;
  };

  changeProductQuantity = (product, quantity) => {
    const productToUpdate = this.state.cart.find(
      (element) =>
        JSON.stringify(element.attributes) ===
        JSON.stringify(product.attributes)
    );

    let quant = (productToUpdate.quantity += quantity);
    productToUpdate.quantity = quant;

    this.setState(prev => (
      {...prev}
    ))
  }

  removeFromCart = (id, attributes) => {
    this.setState({
      cart: this.state.cart.filter((item) => JSON.stringify(item.attributes) !== JSON.stringify(attributes) || item.id !== id),
    });
  };

  render() {
    localStorage.setItem("cart", [JSON.stringify({cart: this.state.cart})]);
    return (
      <Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          isItemInCart: this.isItemInCart,
          changeProductQuantity: this.changeProductQuantity,
          getTotalInCartItemsQuantity: this.getTotalInCartItemsQuantity(),
          getTotalPrice: this.getTotalPrice,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CartContextProvider, Consumer as CartContextConsumer };
