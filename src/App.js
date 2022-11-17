import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { PureComponent } from "react";
import { onError } from "@apollo/client/link/error";
import GetCategories from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductListingPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/NotFoundPage";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: "http://localhost:4000/" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <GetCategories />
        <div id="app-wrapper">
          <Switch>
            <Route exact path="/">
              <Redirect to="/all" />
            </Route>
            <Route path="/tech">
              <ProductListingPage category={"tech"} />
            </Route>
            <Route path="/clothes">
              <ProductListingPage category={"clothes"} />
            </Route>
            <Route path="/all">
              <ProductListingPage category={"all"} />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/:productId">
              <ProductDetail />
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
