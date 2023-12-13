import { Box, Container } from "@mui/material";
import React from "react";
import SideBar from "../components/SideBar";
import MoviesList from "../components/MoviesList";
import { Outlet, useOutletContext } from "react-router-dom";

export default function MainSection() {
  const { showSearchBar, setQuery, query } = useOutletContext();

  return (
    <>
      <Outlet context={{ showSearchBar, setQuery }} />
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
