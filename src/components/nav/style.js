import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogoImg = styled.img`
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);

  /* @media (max-width: 768px) {
    position: unset;
  } */
`;

const StyledNavbarItemsContainer = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  @media (max-width: 768px) {
    gap: 1.5em;
    padding-right: 1em;
  }
`;

const StyledUl = styled.ul`
  padding: 1.75em 0;
  margin-bottom: 5em;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.75em 2em;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #1d1f22;
  &.active {
    position: relative;
    color: #5ece7b;
    font-weight: 600;

    &::after {
      content: "";
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      width: 120%;
      height: 2px;
      background: #5ece7b;
    }
  }
`;

export { StyledLogoImg, StyledNavbarItemsContainer, StyledUl, StyledNavLink };
