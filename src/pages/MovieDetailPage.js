import React, { useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetailPage() {
  let params = useParams();
  const [info, setInfo] = useState([]);
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

  return <div>MovieDetailPage of {params.movieId}</div>;
}

export default MovieDetailPage;
