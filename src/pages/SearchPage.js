import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useOutletContext } from "react-router-dom";

function SearchPage({ setQuery, showSearchBar }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          display: showSearchBar ? "block" : "none",
          marginTop: "1rem",
        }}
      >
        <FormControl fullWidth={true} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Type to search
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon
                  onClick={() => {
                    setQuery((prevState) => ({
                      ...prevState,
                      search: inputValue,
                    }));
                  }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </Container>
    </>
  );
}

export default SearchPage;
