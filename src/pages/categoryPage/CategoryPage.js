import { PRODUCTS_FROM_CATEGORY } from "../../graphQL/queries";
import { Query } from "@apollo/client/react/components";
import React, { PureComponent } from "react";
import styled from "styled-components";
import ProductCard from "../../components/product/productCard/ProductCard";
import { withRouter } from "react-router-dom";
class CategoryPage extends PureComponent {
  render() {
    console.log(this)
    return (
      <>
        <StyledHeading>{this.props.category}</StyledHeading>
        <StyledProductsGrid>
          <Query query={PRODUCTS_FROM_CATEGORY(this.props.match.params.category)}>
            {({ loading, data, error }) => {
              if (loading) return <span>Loading</span>;
              if (error) return <span>something went wrong :(</span>;
              if (data.category.products) {
                return data.category.products.map((product) => {
                  return <ProductCard key={product.id} product={product} category={product.category}/>;
                });
              }
            }}
          </Query>
        </StyledProductsGrid>
      </>
    );
  }
}

export default withRouter(CategoryPage);

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

  @media (max-width: 768px) {
    gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
