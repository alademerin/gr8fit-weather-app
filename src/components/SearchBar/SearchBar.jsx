import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Container } from "./SearchBar.styled";
const SearchBar = ({ inputValueChanged, placeholder, searchBarRef,defaultValue }) => {
  useEffect(() => {
    searchBarRef.current.focus();
  }, [searchBarRef]);
  return (
    <Container>
      <BiSearch />
      <input placeholder={placeholder} onChange={inputValueChanged} ref={searchBarRef} value={defaultValue} />
    </Container>
  );
};

export default SearchBar;
