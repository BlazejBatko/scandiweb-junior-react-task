import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { PRODUCT_BY_ID } from "../../graphQL/queries";
import { Query } from "@apollo/client/react/components";
import parse from "html-react-parser";
import AddToCartForm from "../../components/addProductToCartForm/AddToCartForm";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import {
  StyledDescription,
  StyledProductBrand,
  StyledProductDetails,
  StyledProductImageContainer,
  StyledProductName,
  StyledProductPageWrapper,
  StyledThumbnailsContainer,
} from "./style";

class ProductPage extends PureComponent {
  id = this.props.match.params.productId;

  
  state = {
    currentPhotoIndex: 0,
  };

  handleClick = (index) => {
    this.setState({ currentPhotoIndex: index });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.props.match)
    return (
      <Query query={PRODUCT_BY_ID(this.id)}>
        {({ loading, data, error }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Something went wrong :( </div>;
          if (data.product) {
            const productObj = data.product;
            return (
              <StyledProductPageWrapper>
                <StyledThumbnailsContainer>
                  {productObj.gallery.map((image, index) => (
                    <img
                      onClick={() => this.handleClick(index)}
                      src={image}
                      alt={`gallery thumbnail ${index}`}
                      key={image}
                    />
                  ))}
                </StyledThumbnailsContainer>

                <StyledProductImageContainer>
                  <img
                    src={productObj.gallery[this.state.currentPhotoIndex]}
                    alt={`product photography representing ${productObj.brand} ${productObj.name}`}
                  />
                </StyledProductImageContainer>

                <StyledProductDetails>
                  <StyledProductBrand>{productObj.brand}</StyledProductBrand>
                  <StyledProductName>{productObj.name}</StyledProductName>

                  <AddToCartForm productObj={productObj} data={data} />

                  <StyledDescription>
                    {parse(productObj.description)}
                  </StyledDescription>
                </StyledProductDetails>
              </StyledProductPageWrapper>
            );
          }
          //handling the case when given url is not found among routes
          return <NotFoundPage />;
        }}
      </Query>
    );
  }
}

export default withRouter(ProductPage);
