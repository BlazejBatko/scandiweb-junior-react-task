import styled from "styled-components";

const StyledLogoImg = styled.img`
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: unset;
  }
`;

const StyledNavbarItemsContainer = styled.div`
  display: flex;
  gap: 2em;
`;
const StyledUl = styled.ul`
  padding: 1.75em 0;
  margin-bottom: 5em;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export { StyledLogoImg, StyledNavbarItemsContainer, StyledUl };
