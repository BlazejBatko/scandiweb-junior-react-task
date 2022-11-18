import styled from "styled-components";

const StyledShopNowBtn = styled.button`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  background: #5ece7b;
  padding: 0.8em 2em;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background: #429c5a;
    cursor: pointer;
  }
`;

const StyledEmptyCartContainer = styled.div`
  margin-top: 40px;
  font-size: 2rem;
  gap: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledHeadline = styled.h1`
  border-bottom: 1px solid #e5e5e5;
  font-size: 2rem;
  padding-bottom: 2em;
  font-weight: 700;
  text-transform: uppercase;
`;

export { StyledShopNowBtn, StyledEmptyCartContainer, StyledHeadline };
