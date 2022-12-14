import styled from "styled-components";

const StyledTotalPriceText = styled.h3`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 1rem;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 0.75em;
  width: 100%;
`;
const StyledTotalPriceValue = styled.span`
  font-weight: 700;
`;
const StyledOverlayHeading = styled.h2`
  font-weight: 700;
  font-size: 1rem;
`;
const StyledOverlayHeadingItemsValue = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

const StyledOverlayHeader = styled.div`
  margin-bottom: 1em;
`;

const StyledTotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCartIconContainer = styled.div`
  position: relative;

  ${({ length }) =>
    length > 0 &&
    `

  &::before {
    content: "${length}";
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    width: 20px;
    font-size: 14px;
    top: -11px;
    right: -11px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
  }
  
  `}

  &:hover {
    cursor: pointer;
  }
`;

const StyledOverlayFooterCTA = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  border: 1px solid black;
  padding: 0.7em;
  width: 50%;
  background: white;

  a {
    color: black;
    font-family: "Raleway", sans-serif;
  }
  ${(props) =>
    props.checkout ? "color: white; background: #5ECE7B; border: none;" : ""};
`;

const StyledOverlayFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  row-gap: 2.125em;
  margin-top: 1em;
`;

const StyledMiniCart = styled.div`
  position: relative;
`;

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 69px;
  right: 0;
  bottom: 0;
  background: rgba(57, 55, 72, 0.22);
  z-index: 1;
`;

const StyledOverlayContent = styled.div`
  top: 50px;
  padding: 1em;
  right: 0;
  position: absolute;
  z-index: 2;
  background: white;
`;

const StyledOverlayContentEmpty = styled(StyledOverlayContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: max-content;
`;

const StyledCartProductsContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export {
  StyledTotalPriceText,
  StyledButtonsContainer,
  StyledTotalPriceValue,
  StyledOverlayHeading,
  StyledOverlayHeadingItemsValue,
  StyledOverlayHeader,
  StyledTotalPriceContainer,
  StyledCartIconContainer,
  StyledOverlayFooterCTA,
  StyledOverlayFooter,
  StyledMiniCart,
  StyledOverlay,
  StyledOverlayContent,
  StyledOverlayContentEmpty,
  StyledCartProductsContainer,
};
