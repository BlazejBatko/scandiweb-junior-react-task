import styled from "styled-components";

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
  max-height: 300px;
  overflow-y: auto;
  max-width: 550px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  padding-right: 10px;

  span {
    display: list-item;
  }
  li {
    margin-bottom: 10px;
  }

  ul {
    margin-left: 20px;
  }
`;

const StyledProductGalleryContainer = styled.div`
  display: flex;
  gap: 1em;
  flex: 2;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const StyledProductImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    min-width: 200px;
    max-height: 600px;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    max-height: 100%;
    min-height: max-content;
    img {
      aspect-ratio: 1/1;
    }
  }
`;
const StyledProductPageWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 1em;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  max-width: 400px;
`;

const StyledThumbnailsContainer = styled.div`
  min-width: 50px;
  max-width: 150px;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: auto;

  img {
    scroll-snap-align: center;
    object-fit: cover;
    padding: 1em 1em 1em 0;
    cursor: pointer;

    @media (min-width: 768px) {
      &:first-child {
        padding-top: 0;
      }
    }
  }

  @media (max-width: 768px) {
    scroll-snap-type: x mandatory;
    max-width: 90vw;
    max-height: 150px;
    overflow-x: auto;
    flex-direction: row;

    img {
      max-width: 100px;
    }
  }
`;

export {
  StyledProductBrand,
  StyledProductGalleryContainer,
  StyledProductName,
  StyledDescription,
  StyledProductImageContainer,
  StyledProductPageWrapper,
  StyledProductDetails,
  StyledThumbnailsContainer,
};
