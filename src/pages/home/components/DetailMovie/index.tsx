import { MovieDetails, MovieResult } from "@/shared/types";
import { MovieService } from "@/shared/services/api";
import {
  Box,
  Button,
  CircularProgress,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React, { useEffect, useState } from "react";

import { MovieSinopse } from "./MovieSinopse";

interface IDetailMovieProps {
  movie: MovieResult;
  handleCloseDetailMove: () => void;
  isOpen: boolean;
}

export const DetailMovie: React.FC<IDetailMovieProps> = ({
  movie,
  isOpen,
  handleCloseDetailMove,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [findedMovie, setFindedMovie] = useState<MovieDetails>(
    {} as MovieDetails
  );

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setIsLoading(true);
    MovieService.getById(movie.id).then((result) => {
      setIsLoading(false);
      if (result instanceof Error) alert(result.message);
      else setFindedMovie(result);
    });
  }, []);



  return (
    <Drawer anchor="right" open={isOpen} onClose={handleCloseDetailMove}>
      <Box width={smDown ? 470 : 820}>
        {isLoading ? (
          <Box
            width={"100%"}
            height={"100vh"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <CircularProgress size={138} />
              <Typography>Obtendo dados de "{movie.title}"</Typography>
            </Box>
          </Box>
        ) : (
          <Stack>
            <img
              src={`https://image.tmdb.org/t/p/w1280${findedMovie.backdrop_path}`}
              alt={`Imagem do filme ${findedMovie.title}`}
            />
            <Box p={8}>
              <Typography variant="h3" component={"h3"}>
                {findedMovie.title}
              </Typography>

              <Typography variant="subtitle2" component={"span"}>
                {findedMovie.overview}
              </Typography>

              <Box mt={12}>
                <Box>
                  <MovieSinopse title="Estado" subtitle={findedMovie.status} />
                  <MovieSinopse
                    title="Orçamento"
                    subtitle={String(findedMovie.budget)}
                  />
                  <MovieSinopse
                    title="Bilheteira"
                    subtitle={String(findedMovie.revenue)}
                  />
                </Box>
              </Box>
              <Button onClick={handleCloseDetailMove}>
                Voltar
              </Button>
            </Box>
          </Stack>
        )}
      </Box>
    </Drawer>
  );
};
