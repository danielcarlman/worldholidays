import styled from "styled-components";

type SearchBarProps = {
  value: string;
  onChange: any;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <>
      <Input
        aria-label="Numbers and symbols not allowed"
        type="search"
        pattern={`[A-Za-z ]+`}
        value={value}
        placeholder="Search country..."
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

const Input = styled.input`
  border: 2px solid lightgray;
  padding: 0.2rem;
  margin-top: 0.5rem;
  outline: none;
  color: #6366f1;
  :focus {
    border-color: #6366f1;
  }
  ::placeholder {
    color: #333333;
  }
`;

export default SearchBar;
