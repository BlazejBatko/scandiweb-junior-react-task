import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { PRODUCT_BY_ID } from "../GraphQL/Queries";
import { Query } from "@apollo/client/react/components";
import styled from "styled-components";
import parse from "html-react-parser";

import AddToCartForm from "../components/AddToCartForm";
import ErrorPage from "./NotFoundPage";
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
    return (
      <section>
        <Query query={PRODUCT_BY_ID(this.id)}>
          {({ loading, data, error }) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Something went wrong :( </div>;
            if (data.product) {
              const res = data.product;
              return (
                <StyledProductPageWrapper>
                  <StyledThumbnailsContainer className="gallery">
                    {res.gallery.map((image, index) => (
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
                      src={res.gallery[this.state.currentPhotoIndex]}
                      alt={`product photography representing ${res.brand} ${res.name}`}
                    />
                  </StyledProductImageContainer>

                  <StyledProductDetails className="details">
                    <StyledProductBrand>{res.brand}</StyledProductBrand>
                    <StyledProductName>{res.name}</StyledProductName>

                    <AddToCartForm productObj={res} data={data} />

                    <StyledDescription>
                      {parse(res.description)}
                    </StyledDescription>
                  </StyledProductDetails>
                </StyledProductPageWrapper>
              );
            }
            return <ErrorPage />;
          }}
        </Query>
      </section>
    );
  }
}

export default withRouter(ProductPage);

const StyledProductBrand = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
`;

const StyledProductName = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  margin-bottom: 1.5em;
`;

const StyledDescription = styled.div`
  margin-top: 2.5em;
  display: flex;
  height: 300px;
  overflow-y: auto;
  max-width: 300px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 10px;
  }
`;

const StyledProductImageContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  img {
    min-width: 200px;
    max-height: 600px;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const StyledProductPageWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 1em;
`;

const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 2 auto;
  max-width: 400px;
`;

const StyledThumbnailsContainer = styled.div`
  min-width: 100px;
  max-width: 150px;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: auto;
  gap: 2.5em;

  img {
    object-fit: cover;
    padding: 1em;
    cursor: pointer;
  }
`;
