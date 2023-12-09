import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Container, Typography } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({ name, options, handleClick }) {
  return (
    <>
      <Typography lineHeight={3} style={{ fontSize: 14 }}>
        {name}
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-begin",
          flexWrap: "wrap",
          listStyle: "none",
          m: 0,
        }}
        style={{ padding: "0", margin: "0" }}
        component="ul"
      >
        {options.map((chip) => {
          return (
            <ListItem
              style={{ marginRight: "4px", marginLeft: "0" }}
              key={chip.id}
            >
              <Chip
                variant={chip.selected ? "" : "outlined"}
                label={chip.name}
                onClick={handleClick(chip.id)}
                color={chip.selected ? "primary" : "default"}
              />
            </ListItem>
          );
        })}
      </Container>
    </>
  );
}
