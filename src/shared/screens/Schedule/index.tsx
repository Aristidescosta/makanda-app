import { SectionElement, SectionH1 } from "@/shared/styles/globalStyles";
import { IMovieType } from "@/shared/types";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const Schedule: React.FC = () => {
  const [movies, setMovies] = useState<IMovieType[]>([]);

  const fetchData = () => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:5173/data/movies.json", { signal })
      .then((response) => response.json())
      .then((data) => setMovies(data as IMovieType[]))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err.message);
        }
      });

    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    const cleanup = fetchData();
    return cleanup;
  }, []);
  return (
    <SectionElement component={"section"}>
      <Box>
        <SectionH1 variant="h4" className="section-title">
          Mais vistos da semana
        </SectionH1>
      </Box>

      <Stack spacing={2} direction="row" mt={8}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={6} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={movie.bgImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionElement>
  );
};
