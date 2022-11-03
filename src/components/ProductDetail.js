import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { PRODUCT_BY_ID } from "../GraphQL/Queries";
import { Query } from "@apollo/client/react/components";
import styled from "styled-components";
import parse from "html-react-parser";
import { CurrencyContextConsumer } from "../context/CurrencyContext";
import { CartContextConsumer } from "../context/CartContext";
class ProductDetail extends PureComponent {
  id = this.props.match.params.productId;

  state = {
    currentPhotoIndex: 0,
    
  };

  handleClick = (index) => {
    this.setState({ currentPhotoIndex: index });
  };

  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    
  };

  handleFormSubmit = (e, fn) => {
    e.preventDefault();
    fn();
  };

  render() {
    
    return (
      <section>
        <Query query={PRODUCT_BY_ID(this.id)}>
          {({ loading, data }) => {
            if (loading) return <div>Loading</div>;
            if (data) {
              const res = data.product;
              return (
                <StyledProductDetails>
                  <div className="gallery">
                    {res.gallery.map((image, index) => (
                      <img
                        onClick={() => this.handleClick(index)}
                        src={image}
                        alt=""
                        key={image}
                      />
                    ))}
                  </div>

                  <StyledImage>
                    <img
                      src={res.gallery[this.state.currentPhotoIndex]}
                      alt=""
                    />
                  </StyledImage>

                  <div className="details">
                    <h1 className="product-brand__detail"> {res.brand}</h1>
                    <h1 className="product-name__detail"> {res.name}</h1>

                    <CartContextConsumer>
                      {(context) => (
                        <form
                          onSubmit={(e) => {
                            context.addToCart({
                              data: data,
                              quantity: 1,
                              id: data.product.id,
                              //passing state without currentPhotoIndex property
                              attributes: (({ currentPhotoIndex, ...rest }) =>
                                rest)(this.state),
                            });
                            e.preventDefault();
                          }}
                        >
                          {res.attributes.map((attribute) => {
                            return (
                              <StyledAttributesContainer key={attribute.name}>
                                <h1 className="product-attribute-title__detail">
                                  {" "}
                                  {attribute.name}{" "}
                                </h1>
                                <div className="attributes">
                                  {attribute.items.map((item) => {
                                    return (
                                      <div key={item.value}>
                                        {" "}
                                        {attribute.type !== "swatch" ? (
                                          <InputContainer isSwatch>
                                            <RadioButton
                                              onChange={this.handleFormChange}
                                              type="radio"
                                              required
                                              isSwatch
                                              value={item.displayValue}
                                              name={attribute.name}
                                              
                                            />
                                            <RadioButtonLabel isSwatch>
                                              {" "}
                                              {item.value}{" "}
                                            </RadioButtonLabel>
                                          </InputContainer>
                                        ) : (
                                          <InputContainer>
                                            <RadioButton
                                              required
                                              onChange={this.handleFormChange}
                                              type="radio"
                                              value={item.displayValue}
                                              name={attribute.name}
                                            />
                                            <RadioButtonLabel
                                              color={item.displayValue}
                                            >
                                              {" "}
                                            </RadioButtonLabel>
                                          </InputContainer>
                                        )}{" "}
                                      </div>
                                    );
                                  })}
                                </div>
                              </StyledAttributesContainer>
                            );
                          })}
                          <StyledPriceContainer className="product-attribute-price-title__detail ">
                            Price:
                            <CurrencyContextConsumer>
                              {({ currencyIndex }) => (
                                <span className="product-price__detail ">
                                  {res.prices[currencyIndex].currency.symbol}
                                  {res.prices[currencyIndex].amount}
                                </span>
                              )}
                            </CurrencyContextConsumer>
                          </StyledPriceContainer>

                          <StyledButtonCTA>add to cart</StyledButtonCTA>
                        </form>
                      )}
                    </CartContextConsumer>
                    <StyledDescription className="product-description__detail">
                      {parse(res.description)}
                    </StyledDescription>
                  </div>
                </StyledProductDetails>
              );
            }
          }}
        </Query>
      </section>
    );
  }
}

export default withRouter(ProductDetail);

const StyledPriceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledAttributesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 2em 2em;

  ${(props) =>
    !props.isSwatch &&
    `
  padding: 0;
  width: 30px;
  height: 30px;
`}
`;
const RadioButtonLabel = styled.label`
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: ${(props) => props.color || "white"};
  border: ${(props) =>
    props.isSwatch
      ? "1px solid black"
      : props.color === "White"
      ? "1px solid black"
      : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RadioButton = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 1;

  cursor: pointer;

  ${(props) =>
    props.isSwatch
      ? `

  &:checked + ${RadioButtonLabel} {
    background: black;
    color: white;
  }
 
`
      : `

  &:checked + ${RadioButtonLabel} {
    outline: 1px solid #5ECE7B;
    outline-offset: 1px;
  }
 
`}
`;

const StyledDescription = styled.div`
  margin-top: 2.5em;
  display: flex;
  height: 300px;
  overflow-y: auto;
  gap: 20px;
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 10px;
  }
`;
const StyledButtonCTA = styled.button`
  background: #5ece7b;
  cursor: pointer;
  display: block;
  text-transform: uppercase;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 1em 5em;
  margin-top: 1.25em;
`;
const StyledImage = styled.div`
  flex: 3 1 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  img {
    min-width: 200px;
    max-height: 80vh;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 1/1;
    justify-self: center;
  }
`;
const StyledProductDetails = styled.div`
  .attributes {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }
  display: flex;
  align-items: start;
  gap: 1em;
  .gallery {
    min-width: 100px;
    max-width: 150px;
    flex: 1 2 auto;
    display: flex;
    flex-direction: column;
    height: 500px;
    overflow-y: auto;
    gap: 2.5em;
  }
  .details {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 2 auto;
    max-width: 400px;
  }

  .gallery img {
    object-fit: cover;
    padding: 1em;
    cursor: pointer;
  }
`;
