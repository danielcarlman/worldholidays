import { useState } from "react";
import styled from "styled-components";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      setTimeout(() => {
        console.log(query);
      }, 1000);
    }
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        title="Numbers and symbols not allowed"
        type="search"
        pattern={`[A-Za-z ]+`}
        value={query}
        placeholder="Example: Brazil"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
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

const Button = styled.button`
  font-size: 1rem;
  padding: 0.075rem 0.5rem;
`;

export default SearchBar;
