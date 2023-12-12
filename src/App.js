import { Box, Container, TextField } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import { Outlet } from "react-router-dom";

function App() {
  const [query, setQuery] = useState({
    sortBy: "",
    genresFilter: [],
    language: "",
    pagination: 1,
    search: "",
  });
  console.log(query);

  return (
    <>
      <ResponsiveAppBar />
      <Outlet context={setQuery} />

      <Container maxWidth="lg">
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

export default App;
