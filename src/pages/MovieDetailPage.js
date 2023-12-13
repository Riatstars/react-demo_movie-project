import { Box } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CustomBackground from "../components/muiComponents/CustomBackground";
import CircleIcon from "@mui/icons-material/Circle";

function MovieDetailPage() {
  let params = useParams();
  const [info, setInfo] = useState([]);
  const URL_BASE = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";
  const d = new Date(info.release_date);
  const releaseYear = d.getFullYear(info.release_date);
  const relaseMonth = d.getMonth(info.release_date) + 1;
  const relaseDay = d.getDate(info.release_date);
  const duration = `${Math.floor(info.runtime / 60)}h ${info.runtime % 60}m`;

  const renderGenres = () => {
    if (info.genres != []) {
      const genres = info.genres;
      const genresElement = genres?.map((genre, index) => {
        if (index < genres.length - 1) {
          return <a>{genre.name}, </a>;
        } else {
          return <a>{genre.name}</a>;
        }
      });
      return <>{genresElement}</>;
    }
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

    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setInfo(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(info);

  return (
    <>
      <CustomBackground info={info}>
        <Box
          maxWidth="1140px"
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            padding: " 0 30px",
            boxSizing: "",
            height: "100%",
          }}
        >
          <Box style={{ width: "300px", height: "450px" }}>
            <img
              style={{
                margin: "auto",
                objectFit: "contain",
                width: "300px",
                height: "450px",
                borderRadius: "10px",
              }}
              src={URL_BASE + info.poster_path}
              alt=""
            />
          </Box>
          <Box
            style={{
              flex: 1,
              width: "300px",
              height: "450px",
              paddingLeft: "40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <h2
                style={{
                  margin: "0 0",
                  lineHeight: "45px",
                  fontSize: "32.5px",
                }}
              >
                <a>{info.original_title}</a>
                <span>({releaseYear})</span>
              </h2>
            </Box>
            <Box
              style={{
                marginBottom: "40px",
              }}
            >
              <span>{relaseDay + "/" + relaseMonth + "/" + releaseYear}</span>
              <CircleIcon sx={{ fontSize: 10, padding: "0 10px" }} />
              <span>{renderGenres()}</span>
              <CircleIcon sx={{ fontSize: 10, padding: "0 10px" }} />
              <span>{duration}</span>
            </Box>
            <Box>
              <h3>{info.tagline}</h3>
            </Box>
            <Box>
              <h3>Overview</h3>
              <p>{info.overview}</p>
            </Box>
            <Box
              fullwidth={true}
              display={"flex"}
              style={{ justifyContent: "space-between" }}
            >
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <h3>Vote Average</h3>
                <span>{info.vote_average}</span>
              </Box>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <h3>Vote Count</h3>
                <span>{info.vote_count}</span>
              </Box>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <h3>Popularity</h3>
                <span>{info.popularity}</span>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </CustomBackground>
    </>
  );
}

export default MovieDetailPage;
