import styled from "styled-components";

const StyledDropDownContainer = styled.div`
  position: absolute;
  left: -20px;
  width: 114px;
  background: #fff;
  padding: 4px 0;
  margin-top: 10px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

const StyledDropDownCurrencyOption = styled.div`
  padding: 13px 0 13px 20px;
  cursor: pointer;
  display: flex;
  width: 100%;
  font-size: 1.125rem;
  font-weight: 500;
  ${({ isSelected }) => isSelected && "background: #eee;"}

  &:hover {
    background: #f7f7f7;
  }
`;

const StyledDropDownToggler = styled.div`
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;
const StyledDropDownWrapper = styled.div`
  z-index: 5;
  position: relative;
`;

export {
  StyledDropDownContainer,
  StyledDropDownCurrencyOption,
  StyledDropDownToggler,
  StyledDropDownWrapper,
};
