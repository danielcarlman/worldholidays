import styled from "styled-components";

type RadioButtonProps = {
  checked: boolean;
  key: string;
  label: string;
  id: string;
  name: string;
  onChange: (e: any) => void;
};

function RadioButton({ label, id, name, ...props }: RadioButtonProps) {
  return (
    <RadioButtons>
      <RadioButtonInput type="radio" id={id} name={name} {...props} />
      <Label>{label}</Label>
    </RadioButtons>
  );
}

const RadioButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RadioButtonInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #6366f1;
  border-radius: 3px;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  &:checked {
    color: white;
    background-color: #6366f1;
  }

  &:focus {
    border-color: #6366f1;
  }
`;

const Label = styled.label`
  font-size: 0.75rem;
`;

export default RadioButton;
