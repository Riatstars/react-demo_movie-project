import * as React from "react";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

export default function SelectBox({ title, options, setQuery }) {
  const [value, setValue] = React.useState(options[0].value);

  const handleChange = (e) => {
    console.log(e.target.value);
    // setValue(options.find((option) => option.id === event.target.value).value);

    setValue(e.target.value);
    setQuery((prevState) => ({ ...prevState, sortBy: e.target.value }));
  };

  return (
    <>
      <Typography style={{ fontSize: 14 }}>{title}</Typography>
      <Box style={{ fontSize: "14px" }} sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
          <Select value={value} displayEmpty onChange={handleChange}>
            {options?.map((option) => (
              <MenuItem
                key={option.id}
                style={{ fontSize: 14 }}
                value={option.id}
              >
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
