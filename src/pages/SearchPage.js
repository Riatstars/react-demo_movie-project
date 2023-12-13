import { Box, Container } from "@mui/material";
import React from "react";
import SearchBarPage from "./SearchBarPage";
import { useOutletContext } from "react-router-dom";
import SearchResultList from "../components/SearchResultList";

const SearchPage = () => {
  const { showSearchBar, setQuery, query } = useOutletContext();

  return (
    <>
      <SearchBarPage showSearchBar={showSearchBar} setQuery={setQuery} />
      <Container maxwidth="lg">
        <h2> Now Playing Movies</h2>
        <Box style={{ display: "flex" }}>
          <SearchResultList query={query} setQuery={setQuery} />
        </Box>
      </Container>
    </>
  );
};
export default SearchPage;
