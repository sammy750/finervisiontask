import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #dedede;
  height: auto;
`;

// Styled component for the flex container
export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

// Styled component for the input
export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 250px;
  transform: translateY(5px);
  box-shadow: inset 0 0 5px;
  @media (max-width: 526px) {
    width: 150px;
  }
`;

// Styled component for the button
export const Button = styled.button`
  margin-left: auto;
  background: linear-gradient( #655bb6, #7061c8);
  color: #fff;
  height: 25px;
  width: 25%;
  minWidth: 100px;
  border: none;
  border-radius: 10px;
  padding: 0px 20px;
  &:hover {
    cursor: pointer;
  }
`;

// Styled component for the inputBox
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Styled component for the label
export const Label = styled.label`
  font-weight: 600;
`;