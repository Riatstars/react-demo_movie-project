import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

let pagination = 1;
function MoviesList({ query, setQuery }) {
  const [movies, setMovies] = useState([]);
  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US`;

  const handlePagination = () => {
    pagination++;
    setQuery((prevState) => ({
      ...prevState,
      pagination: pagination,
    }));
    console.log(pagination);
  };

  const fetchMoviesByFilter = async () => {
    setQuery((prevState) => ({
      ...prevState,
      pagination: 1,
    }));
    url += "&page=" + query.pagination;
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
      url += "&with_genres=" + genresQuery;
    }
    if (query.language) {
      url += "&with_original_language=" + query.language;
    }
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results);
      return movies;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMoviesByPagination = async () => {
    if (query.pagination > 1) {
      url += "&page=" + query.pagination;
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
      try {
        const response = await fetch(url, options);

        const data = await response.json();
        setMovies((prevState) => prevState.concat(data.results));

        return movies;
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchMoviesByFilter();
  }, [query.sortBy, query.genresFilter, query.language]);
  useEffect(() => {
    fetchMoviesByPagination();
  }, [pagination]);

  return (
    <>
      <Container style={{ paddingLeft: "30px" }}>
        <Grid
          style={{ margin: "0", marginTop: "-30px" }}
          container
          columns={10}
          spacing={2}
        >
          {movies.map((movie) => (
            <Grid style={{ paddingTop: "0" }} key={movie.title} item md={2}>
              <MovieCard
                moviePath={movie.poster_path}
                movieTitle={movie.title}
                movieReleaseDate={movie.release_date}
              />
            </Grid>
          ))}
          <Grid item md={10}>
            <Button
              style={{ width: "100%", justifySelf: "center" }}
              variant="contained"
              onClick={handlePagination}
            >
              Load More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MoviesList;
