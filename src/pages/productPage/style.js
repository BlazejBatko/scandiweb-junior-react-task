import styled  from 'styled-components'


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
  }
`;
const StyledProductPageWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 1em;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    
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

  @media (max-width: 768px) {
    max-width: 70px;
  }
  img {
    object-fit: cover;
    padding: 1em 1em 1em 0;
    cursor: pointer;

    &:first-child {
      padding-top: 0;
    }
  }
`;

export { StyledProductBrand, StyledProductName, StyledDescription, StyledProductImageContainer, StyledProductPageWrapper, StyledProductDetails, StyledThumbnailsContainer };