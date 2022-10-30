import { PRODUCTS_FROM_CATEGORY } from "../GraphQL/Queries";
import { Query } from "@apollo/client/react/components";
import { PureComponent } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
class AllCategory extends PureComponent {
  render() {
    console.log("rerendered")
    return (
      <main>
        <StyledHeading className="heading">{this.props.category}</StyledHeading>
        <StyledProductsGrid>
          <Query query={PRODUCTS_FROM_CATEGORY(this.props.category)}>
            {({ loading, data }) => {
              if (loading) return <div>Loading</div>;
              const res = data.category.products;
              console.log(res);

              return res.map((product) => {
                return (
                <Link to={product.id}>
                    <StyledProduct className={product.id}>
                      <img
                        className="product-cover__category"
                        src={product.gallery[0]}
                        alt={`${product.name}`}
                      />
                      <h1 className="product-name__category">
                        {" "}
                        {product.name}
                      </h1>
                      <CurrencyContextConsumer> 
                       { ({currencyIndex}) => ( <h2 className="product-price__category">
                          {" "}
                          {product.prices[currencyIndex].currency.symbol}
                          {product.prices[currencyIndex].amount}{" "}
                        </h2>)
                        }
                      </CurrencyContextConsumer>
                    </StyledProduct>
                  </Link>
                );
              });
            }}
          </Query>
        </StyledProductsGrid>
      </main>
    );
  }
}

export default AllCategory;

const StyledHeading = styled.h1`
  margin-top: 2em;
`;

const StyledProduct = styled.div`
  padding: 1em;
 
  
  .product-cover__category {
    width: 100%;
    height: 500px;
    object-fit: contain;
    object-position: center;
    margin-bottom: 1.5em;
  }

  &:hover {
   box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19)
  }
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

  .ps-5 > img {
    object-position: bottom;
  }
  .jacket-canada-goosee > img {
    object-position: top;
  }
`;
