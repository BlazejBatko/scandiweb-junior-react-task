import styled from "styled-components";

const StyledProductPriceLabel = styled.h3`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 160%;
`;
const StyledProductNameLabel = styled.h2`
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 160%;
`;

const StyledAddToCartBadge = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: #5ece7b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -20px;
  right: 20px;
  transition: all 0.3s ease-in-out;

  .cart-icon-animation {
    animation: addToCart 0.3s ease-in-out reverse;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background: #303030;
  }

  @keyframes addToCart {
    0% {
      position: absolute;
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(0px, -10px);
    }

    100% {
      position: absolute;
      transform: translate(0px, 0px);
    }
  }
`;

const StyledProductImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  ${(props) =>
    !props.available &&
    `
    &::after {
      position: absolute;
      content: "Out of stock";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 400;
      font-size: 1.5em;
      text-transform: uppercase;
      text-shadow: 1px 1px 1px #fff;
      text-align: center;
    }
  `}
`;
const StyledProduct = styled.div`
  padding: 1em;
  position: relative;
    
  ${({ available }) => !available && ` opacity: 0.5;`}

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

const StyledProductCoverImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  object-position: center;
  margin-bottom: 1.5em;
  
 
`;

export {
  StyledProductPriceLabel,
  StyledProductNameLabel,
  StyledAddToCartBadge,
  StyledProductImageContainer,
  StyledProduct,
  StyledProductCoverImage,
};
