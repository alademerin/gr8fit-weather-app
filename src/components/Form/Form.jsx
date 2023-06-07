import React, { useRef } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Container, SearchButton } from "./Form.styled";

const Form = ({ onFormSubmit, inputValueChanged, searchDefaultValue }) => {
  const searchBarRef = useRef(null);

  return (
    <Container>
      <p>Search City</p>
      <form onSubmit={onFormSubmit}>
        <SearchBar
          defaultValue={searchDefaultValue}
          searchBarRef={searchBarRef}
          placeholder="enter location name"
          inputValueChanged={inputValueChanged}
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </Container>
  );
};

export default Form;
