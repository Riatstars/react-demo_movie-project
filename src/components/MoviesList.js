import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MoviesList({ query }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    let url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1";

    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzkxNzFiMjhmYWNmMGE3ZDM4YTg0NDNiM2YyYjg0MyIsInN1YiI6IjY1NjZiMDVmM2Q3NDU0MDBhYzFmZWZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhl8NF8YPOPv43Qlk1mR64xoFaRYvhRdpuBI4nxWM0Y",
        },
      };
      if (query.sortBy) {
        url += "&sort_by=" + query.sortBy;
      }

      if (query.genresFilter.length) {
        const genresQuery = query.genresFilter.join(",");
        console.log(genresQuery);
        url += "&with_genres=" + genresQuery;
      }

      if (query.language) {
        url += "&with_original_language=" + query.language;
      }
      const response = await fetch(url, options);

      const data = await response.json();
      setMovies(data.results);

      return movies;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();

    return () => {};
  }, [query.sortBy, query.genresFilter, query.language]);

  return (
    <Container style={{ paddingLeft: "30px" }}>
      <Grid
        style={{ margin: "0", marginTop: "-30px" }}
        container
        columns={10}
        spacing={2}
      >
        {movies.map((movie) => (
          <Grid key={movie.title} item md={2}>
            <MovieCard
              moviePath={movie.poster_path}
              movieTitle={movie.title}
              movieReleaseDate={movie.release_date}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MoviesList;
