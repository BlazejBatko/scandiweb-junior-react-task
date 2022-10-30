import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrencyContextProvider } from "./context/CurrencyContext";
import GlobalStyle from "./components/GlobalStyle";
import { CartContextProvider } from "./context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <CurrencyContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CurrencyContextProvider>
    </Router>
  </React.StrictMode>
);
