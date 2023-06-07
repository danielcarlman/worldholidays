import styled from "styled-components";

type SearchBarProps = {
  onChange: any;
};

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <>
      <Input
        aria-label="Numbers and symbols not allowed"
        type="search"
        pattern={`[A-Za-z ]+`}
        placeholder="Example: Brazil"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") onChange(e.currentTarget.value);
        }}
      />
    </>
  );
};

const Input = styled.input`
  border: 2px solid lightgray;
  padding: 0.2rem;
  outline: none;
  color: #6366f1;
  :focus {
    border-color: #6366f1;
  }
  ::placeholder {
    color: #6366f1;
  }
`;

export default SearchBar;
