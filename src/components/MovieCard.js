import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function MovieCard({ moviePath, movieTitle, movieReleaseDate }) {
  return (
    <Card style={{ maxWidth: "182px", maxHeight: "353px", marginTop: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="273"
          width="180"
          image={
            "https://www.themoviedb.org/t/p/w220_and_h330_face" + moviePath
          }
          alt="movie.name"
        />
        <CardContent
          style={{
            padding: "10px",
            //Height width, not working
            height: "273",
            width: "180",
          }}
        >
          <Box>
            <Typography
              lineHeight="18px"
              margin={0}
              gutterBottom
              fontSize={16}
              component="div"
              fontWeight={700}
            >
              {movieTitle}
            </Typography>
            <Typography
              lineHeight="18px"
              variant="body2"
              fontSize={16}
              color="text.secondary"
            >
              {movieReleaseDate}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
