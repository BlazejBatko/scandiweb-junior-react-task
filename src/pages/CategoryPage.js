import { PRODUCTS_FROM_CATEGORY } from "../GraphQL/Queries";
import { Query } from "@apollo/client/react/components";
import React, { PureComponent } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import ErrorPage from "./NotFoundPage";
class CategoryPage extends PureComponent {
  render() {
    return (
      <main>
        <StyledHeading>{this.props.category}</StyledHeading>
        <StyledProductsGrid>
          <Query query={PRODUCTS_FROM_CATEGORY(this.props.category)}>
            {({ loading, data, error }) => {
              if (loading) return <div>Loading</div>;
              if (error) return <div>something went wrong :(</div>;
              if (data.category.products) {
                return data.category.products.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                });
              }

              // return <ErrorPage />
            }}
          </Query>
        </StyledProductsGrid>
      </main>
    );
  }
}

export default CategoryPage;

const StyledHeading = styled.h1`
  margin-top: 2em;
  font-weight: 400;
  font-size: 2.5rem;
  text-transform: capitalize;
`;

const StyledProductsGrid = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  margin: 5em 0;
  display: grid;
  gap: 3.5em;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;
