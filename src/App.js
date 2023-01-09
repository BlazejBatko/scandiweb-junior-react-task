import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { PureComponent } from "react";
import { onError } from "@apollo/client/link/error";
import Navbar from "./components/nav/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import ProductPage from "./pages/productPage/ProductPage";
import CartPage from "./pages/cartPage/CartPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: "https://junior-scandiweb-endpoint.onrender.com",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navbar />
        <main id="app-wrapper">
          <Switch>
            <Route exact path="/">
              <Redirect to="/all" />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/:category/:productId">
              <ProductPage />
            </Route>
            <Route path="/:category">
              <CategoryPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
      </ApolloProvider>
    );
  }
}

export default App;
