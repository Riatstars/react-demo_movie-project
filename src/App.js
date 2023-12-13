import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [query, setQuery] = React.useState({
    sortBy: "",
    genresFilter: [],
    language: "",
    pagination: 1,
    search: "",
  });
  const [showSearchBar, setShowSearchBar] = React.useState(false);

  let navigate = useNavigate();
  React.useEffect(() => {
    navigate("/movie");
  }, []);

  return (
    <>
      <ResponsiveAppBar setShowSearchBar={setShowSearchBar} />
      <Outlet context={{ showSearchBar, query, setQuery }} />
    </>
  );
}

export default App;
