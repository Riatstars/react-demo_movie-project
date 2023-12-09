import * as React from "react";
import Box from "@mui/material/Box";

import { Autocomplete, TextField, Typography } from "@mui/material";

export default function AutoComplete({ title, options, setQuery }) {
  const handleChange = (e, value) => {
    setQuery((prevState) => ({ ...prevState, language: value.iso_639_1 }));
  };

  return (
    <>
      <Typography lineHeight={3} style={{ fontSize: 14 }}>
        {title}
      </Typography>
      <Box style={{ fontSize: "14px" }} sx={{ minWidth: 120 }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option.english_name}
          sx={{ minWidth: 120 }}
          renderInput={(params) => (
            <TextField {...params} label="Select an option" />
          )}
          onChange={handleChange}
        />
      </Box>
    </>
  );
}
