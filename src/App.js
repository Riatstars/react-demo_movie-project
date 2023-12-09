import { Box, Container } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import React, { useState } from "react";
import MoviesList from "./components/MoviesList";

function App() {
  const [query, setQuery] = useState({
    sortBy: "",
    genresFilter: [],
    language: "",
  });
  console.log(query);

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <h2> Now Playing Movies</h2>
        <Box style={{ display: "flex" }}>
          <Box>
            <SideBar setQuery={setQuery} />
          </Box>
          <MoviesList query={query} />
        </Box>
      </Container>
    </>
  );
}

export default App;
