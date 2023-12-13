import { Box, Container } from "@mui/material";
import React from "react";
import SideBar from "../components/SideBar";
import MoviesList from "../components/MoviesList";
import SearchPage from "./SearchPage";

export default function MainSection() {
  const [query, setQuery] = React.useState({
    sortBy: "",
    genresFilter: [],
    language: "",
    pagination: 1,
    search: "",
  });
  const [showSearchBar, setShowSearchBar] = React.useState(false);
  return (
    <>
      <SearchPage showSearchBar={showSearchBar} setQuery={setQuery} />
      <Container maxwidth="lg">
        <h2> Now Playing Movies</h2>
        <Box style={{ display: "flex" }}>
          <Box>
            <SideBar setQuery={setQuery} />
          </Box>
          <MoviesList query={query} setQuery={setQuery} />
        </Box>
      </Container>
    </>
  );
}