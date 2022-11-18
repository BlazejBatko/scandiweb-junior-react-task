import styled from "styled-components";

const StyledProductBrand = styled.h3`
  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `
    font-weight: 600;
    font-size: 1.875rem;
    margin-bottom: 1rem;
    `
      : `
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    `}
`;

const StyledProductName = styled.h4`
  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `
    font-weight: 400;
    font-size: 1.875rem;
    margin-bottom: 1rem;
    `
      : `
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    `}
`;

const StyledPriceLabel = styled.div`
  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    `
      : `
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    `}
`;

const StyledProductQuantity = styled.span`
  font-weight: 500;

  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `
    font-size: 1.5rem;
    `
      : `
    font-size: 1rem;
`}
`;

const StyledPhotoIndexBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.73);
  color: white;
  &:hover {
    transform: scale(1.1);
    img {
      transform: scale(1.1);
    }
  }
`;

const StyledImageContainer = styled.div`
  position: relative;

  ${({ isOnCartPage }) =>
    isOnCartPage &&
    ` img {
        max-width: 200px
      }
      `}
`;
const StyledCarouselContainer = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const StyledCartProductCard = styled.div`
  display: flex;
  margin: 2.5em 0;
  gap: 8px;

  &:first-child {
    margin-top: 1rem;
  }
  ${({ isOnCartPage }) =>
    isOnCartPage &&
    `
    justify-content: space-between;
    border-bottom: 1px solid #E5E5E5;
    margin: 1.5em 0;
    padding-bottom: 1.5em;
  `}
`;

const StyledDataInfoCol = styled.div`
  min-width: ${({ isOnCartPage }) => (isOnCartPage ? "" : "200px")};

  @media (max-width: 768px) {
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `
    max-width: 150px;
    `
        : `
    min-width: 130px;
    `}
  }
`;

const StyledDataGalleryCol = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-width: 150px;
  gap: 8px;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    min-width: 125px;
    ${({ isOnCartPage }) =>
      isOnCartPage ? `flex-direction: column-reverse;` : ``}
  }
`;

const StyledQuantityBtn = styled.button`
  cursor: pointer;

  border: 1px solid black;
  background: white;
  color: black;
  font-size: 1.2rem;

  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `width: 45px;
    height: 45px;
    `
      : `
    width: 24px; height: 24px;`}
`;

const StyledQuantityCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `

  flex-direction: row-reverse;
  
  `
        : `
  
  `}
  }
`;
export {
  StyledProductBrand,
  StyledProductName,
  StyledPriceLabel,
  StyledProductQuantity,
  StyledPhotoIndexBtn,
  StyledImageContainer,
  StyledCarouselContainer,
  StyledCartProductCard,
  StyledDataInfoCol,
  StyledDataGalleryCol,
  StyledQuantityBtn,
  StyledQuantityCol,
};
