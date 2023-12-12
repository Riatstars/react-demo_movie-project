import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SelectBox from "./muiComponents/SelectBox";
import RadioButtonsGroup from "./muiComponents/RadioButtonsGroup";
import ChipsArray from "./muiComponents/ChipsArray";

import AutoComplete from "./muiComponents/AutoComplete";

const sortOptions = [
  { id: "popularity.desc", value: "Popularity Descending" },
  { id: "popularity.asc", value: "Popularity Ascending" },
  { id: "vote_average.desc", value: "Rating Descending" },
  { id: "vote_average.asc", value: "Rating Ascending" },
  { id: "primary_release_date.desc", value: "Release Date Descending" },
  { id: "primary_release_date.asc", value: "Release Date Ascending" },
  { id: "aplha.asc", value: "Title(A-Z)" },
  { id: "aplha.desc", value: "Title(Z-A)" },
];
const filterSeenOptions = [
  "Everything",
  "Movies I Haven't Seen",
  "Movies I Have Seen",
];

function SideBar({ setQuery }) {
  const [genres, setGenres] = React.useState([]);
  const [languages, setLanguages] = React.useState([]);
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzkxNzFiMjhmYWNmMGE3ZDM4YTg0NDNiM2YyYjg0MyIsInN1YiI6IjY1NjZiMDVmM2Q3NDU0MDBhYzFmZWZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhl8NF8YPOPv43Qlk1mR64xoFaRYvhRdpuBI4nxWM0Y",
      },
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => {
        const array = response.genres.map((arrayItem) => ({
          ...arrayItem,
          selected: false,
        }));
        setGenres(array);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChipClick = (id) => () => {
    genres?.forEach((chip) => {
      if (chip.id === id) {
        chip.selected = !chip.selected;
        setGenres((genres) => [...genres]);
      }
    });
    const selectedGenres = genres
      .filter((genre) => {
        return genre.selected === true;
      })
      .map((genre) => genre.id);
    setQuery((prevState) => ({ ...prevState, genresFilter: selectedGenres }));
  };

  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzkxNzFiMjhmYWNmMGE3ZDM4YTg0NDNiM2YyYjg0MyIsInN1YiI6IjY1NjZiMDVmM2Q3NDU0MDBhYzFmZWZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhl8NF8YPOPv43Qlk1mR64xoFaRYvhRdpuBI4nxWM0Y",
      },
    };

    fetch("https://api.themoviedb.org/3/configuration/languages", options)
      .then((response) => response.json())
      .then((response) => {
        setLanguages(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Paper elevation={6}>
        <Box>
          <Accordion style={{ width: "260px" }} disableGutters={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontWeight: 700 }}>Sort</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <SelectBox
                title="Sort Results By"
                options={sortOptions}
                setQuery={setQuery}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>

      <Paper style={{ marginTop: "1rem" }} elevation={6}>
        <Box>
          <Accordion
            style={{ width: "260px" }}
            disableGutters={true}
            defaultExpanded={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontWeight: 700 }}>Filters</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <RadioButtonsGroup name="Show Me" options={filterSeenOptions} />
              <Divider />
              <ChipsArray
                name={"Genres"}
                options={genres}
                handleClick={handleChipClick}
              />
              <Divider />
              <Typography style={{ fontSize: 14 }} lineHeight={3}>
                Certification
              </Typography>
              <Divider />
              <AutoComplete
                title={"Language"}
                options={languages}
                setQuery={setQuery}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </>
  );
}

export default SideBar;
