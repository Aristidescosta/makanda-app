import { MovieDetails, MovieResult } from "@/shared/types";
import { MovieService } from "@/shared/services/api";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React, { useEffect, useState } from "react";

import { MovieSinopse } from "./MovieSinopse";
import { CircularProgressWithLabel } from "@/components";
import { TrailerType } from "@/shared/types/TrailerType";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";

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
  const [trailers, setTrailers] = useState<TrailerType[]>([]);

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setIsLoading(true);
    MovieService.getById(movie.id).then((result) => {
      setIsLoading(false);
      if (result instanceof Error) alert(result.message);
      else setFindedMovie(result);
    });
    MovieService.getTrailer(movie.id).then((movieTrailers) => {
      if (movieTrailers instanceof Error) alert(movieTrailers.message);
      else {
        setTrailers(
          movieTrailers.filter(
            (movieTrailer) =>
              movieTrailer.type === "Trailer" &&
              movieTrailer.site === "YouTube" &&
              movieTrailer.official
          )
        );
      }
    });
  }, [movie.id]);

  console.log(trailers);

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleCloseDetailMove}>
      <Box width={smDown || mdDown ? "100%" : "820px"}>
        {isLoading && findedMovie ? (
          <Box
            width={smDown || mdDown ? "100%" : "820px"}
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
              style={{ width: "100%" }}
            />
            <Box p={smDown || mdDown ? 2 : 8}>
              <Typography variant="h3" fontSize={32} component={"h3"}>
                {findedMovie.title}
              </Typography>

              <Typography
                variant="subtitle2"
                fontSize={smDown ? 12 : mdDown ? 14 : 18}
                component={"span"}
              >
                {findedMovie.overview}
              </Typography>

              <Box
                mt={smDown || mdDown ? 2 : 12}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box>
                  <MovieSinopse
                    title="Estado"
                    subtitle={findedMovie.status}
                    fontSize={smDown ? 12 : mdDown ? 14 : 18}
                  />
                  <MovieSinopse
                    title="Orçamento"
                    subtitle={findedMovie.budget}
                    fontSize={smDown ? 12 : mdDown ? 14 : 18}
                  />
                  <MovieSinopse
                    title="Bilheteira"
                    subtitle={findedMovie.revenue}
                    fontSize={smDown ? 12 : mdDown ? 14 : 18}
                  />
                </Box>

                <Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <CircularProgressWithLabel
                      value={findedMovie.popularity / 100}
                    />
                    <Box>
                      <Typography fontSize={smDown ? 12 : mdDown ? 14 : 18}>
                        Classificação
                      </Typography>
                      <Typography fontSize={smDown ? 12 : mdDown ? 14 : 18}>
                        dos
                      </Typography>
                      <Typography fontSize={smDown ? 12 : mdDown ? 14 : 18}>
                        utilizadores
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {trailers.length > 0 && (
                <Box
                  /* width={"100%"}
                  display={"flex"}
                  alignItems="center"
                  flexDirection={"column"} */
                  mt={4}
                >
                  <Typography>Trailers ({trailers.length})</Typography>
                  <Swiper
                    effect="card"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={mdDown ? "auto" : smDown ? 2 : 2}
                    modules={[Autoplay, EffectCards]}
                    style={{ width: "100%" }}
                  >
                    {trailers.map((trailer) => (
                      <SwiperSlide key={trailer.key} style={{ marginLeft: 3 }}>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="iframe"
                            height="194"
                            image={`https://www.youtube.com/embed/${trailer.key}`}
                            title="Trailer"
                          />
                          <CardContent>
                            <Typography variant="h5" component="div">
                              {trailer.name}
                            </Typography>
                          </CardContent>
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              )}

              <Button onClick={handleCloseDetailMove}>Voltar</Button>
            </Box>
          </Stack>
        )}
      </Box>
    </Drawer>
  );
};
