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
import { Switch, Route } from "react-router-dom";
import ProductListingPage from "./components/ProductListingPage";
import ProductDetail from "./components/ProductDetail";

const errorLink = onError(({ graphqlErrors, networkErorr }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
     return alert("GraphQL error: " + message);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <GetCategories />
        <div id="app-wrapper">
        <Switch>
          <Route path="/tech">
            <ProductListingPage category={"tech"} />
          </Route>
          <Route path="/clothes">
            <ProductListingPage category={"clothes"} />
          </Route>
          <Route path="/all">
            <ProductListingPage category={"all"} />
          </Route>
          <Route path="/:productId">
            <ProductDetail />
          </Route>
        </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
