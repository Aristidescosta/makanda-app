import { SectionElement, SectionH1 } from "@/shared/styles/globalStyles";
import { IBannerMovesProps } from "@/components/Banner";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const Schedule: React.FC<IBannerMovesProps> = ({
  isLoading,
  movies,
}) => {
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          movies.map((movie) => (
            <Grid item xs={6} md={3} key={movie.id}>
              <Card sx={{ maxWidth: 345, height: 480 }}>
                <CardActionArea sx={{ overflow: "hidden", height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textOverflow={"ellipsis"}
                    >
                      {movie.overview}
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
          ))
        )}
      </Grid>
    </SectionElement>
  );
};
