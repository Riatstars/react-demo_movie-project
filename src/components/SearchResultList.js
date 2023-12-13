import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

let pagination = 1;
function SearchResultList({ query, setQuery }) {
  const [movies, setMovies] = useState([]);
  let url;

  const handlePagination = () => {
    pagination++;
    setQuery((prevState) => ({
      ...prevState,
      pagination: pagination,
    }));
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
      if (query.search) {
        url = `https://api.themoviedb.org/3/search/movie?query=${query.search}&include_adult=false&language=en-US&page=${query.pagination}`;
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
  const fetchMoviesBySearch = async () => {
    await setQuery((prevState) => ({
      ...prevState,
      sortBy: "",
      genresFilter: [],
      language: "",
      pagination: 1,
    }));

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzkxNzFiMjhmYWNmMGE3ZDM4YTg0NDNiM2YyYjg0MyIsInN1YiI6IjY1NjZiMDVmM2Q3NDU0MDBhYzFmZWZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhl8NF8YPOPv43Qlk1mR64xoFaRYvhRdpuBI4nxWM0Y",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query.search}&include_adult=false&language=en-US&page=${query.pagination}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovies(response.results);
      })

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchMoviesByPagination();
  }, [pagination]);
  useEffect(() => {
    fetchMoviesBySearch();
  }, [query.search]);
  return (
    <>
      <Container style={{ paddingLeft: "30px" }}>
        <Grid
          style={{ margin: "0", marginTop: "-30px" }}
          container
          columns={10}
          spacing={2}
        >
          {movies?.map((movie) => (
            <Grid style={{ paddingTop: "0" }} key={movie.id} item md={2}>
              <Link to={`/movie/${movie.id}`}>
                <MovieCard
                  moviePath={movie.poster_path}
                  movieTitle={movie.title}
                  movieReleaseDate={movie.release_date}
                />
              </Link>
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

export default SearchResultList;
