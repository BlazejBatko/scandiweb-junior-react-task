import styled from "styled-components";

const StyledCartFooterContainer = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5em;
  margin-top: 2em;
`;

const StyledTextInfo = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
`;

const StyledTextTotal = styled.span`
  font-weight: 500px;
  font-size: 1.5rem;
`;
const StyledValueInfo = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;
const StyledOrderCTA = styled.button`
  border: none;
  color: #fff;
  background-color: #5ece7b;
  width: 280px;
  height: 43px;
  margin-top: 1em;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export {
  StyledCartFooterContainer,
  StyledTextInfo,
  StyledTextTotal,
  StyledValueInfo,
  StyledOrderCTA,
};
