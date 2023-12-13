import { Container } from "@mui/material";
import React from "react";

function CustomBackground({ info, children }) {
  const URL_BASE = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
  return (
    <Container
      style={{
        maxWidth: "100%",
        height: "600px",
        backgroundColor: "#111",
        margin: "0",
        padding: "0",
      }}
    >
      <Container
        style={{
          maxWidth: "100%",
          height: "600px",
          backgroundImage: "url(" + URL_BASE + info.backdrop_path + ")",
          backgroundSize: "auto",
          backgroundPosition: "left calc((50vw - 170px) - 340px) top",

          backgroundRepeat: "no-repeat",
          margin: "0",
          padding: "0",
        }}
      >
        <Container
          style={{
            maxWidth: "100%",
            height: "600px",
            background:
              "linear-gradient(to bottom right, rgba(31.5, 31.5, 31.5, 1), rgba(31.5, 31.5, 31.5, 0.84))",
            margin: "0",
            padding: "0",
          }}
        >
          {children}
        </Container>
      </Container>
    </Container>
  );
}

export default CustomBackground;
