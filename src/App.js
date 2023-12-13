import { Box, Container, TextField } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import SearchPage from "./pages/MainSection";

function App() {
  let navigate = useNavigate();

  React.useEffect(() => {
    navigate("/movie");
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}

export default App;
