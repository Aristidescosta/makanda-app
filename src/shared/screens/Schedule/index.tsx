import { SectionElement, SectionH1 } from "@/shared/styles/globalStyles";
import { IBannerMovesProps } from "@/components/Banner";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { MovieResult } from "@/shared/types";

interface IScheduleProps extends IBannerMovesProps {
  onSelectedMovie: (movie: MovieResult) => void;
}

export const Schedule: React.FC<IScheduleProps> = ({
  isLoading,
  movies,
  onSelectedMovie,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const xsDown = useMediaQuery(theme.breakpoints.down("xs"));

  console.log("smDown: ", smDown);
  console.log("mdDown: ", mdDown);
  console.log("xsDown: ", xsDown);

  const splitMovies = (originalMovies: MovieResult[], chunckSize: number) => {
    const resultArray = [];
    for (let i = 0; i < originalMovies.length; i += chunckSize) {
      const chunk = originalMovies.slice(i, i + chunckSize);
      resultArray.push(chunk);
    }
    return resultArray;
  };

  const cardsMovies = splitMovies(movies, 10);

  return (
    <SectionElement
      component={"section"}
      sx={
        !smDown
          ? {
              padding: "120px 100px 20px;",
            }
          : {
              padding: "120px 30px 20px;",
            }
      }
    >
      <Box mb={24}>
        <SectionH1 variant="h4" className="section-title">
          Mais vistos da semana
        </SectionH1>
      </Box>

      {isLoading ? (
        <CircularProgress />
      ) : (
        cardsMovies.map((moviesInCard, key) => (
          <Swiper
            key={key++}
            effect="card"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={mdDown ? 1 : smDown ? 2 : 4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            modules={[Autoplay, EffectCards]}
            style={{ marginTop: 30 }}
          >
            {moviesInCard.map((movie) => (
              <SwiperSlide
                key={movie.id}
                onClick={() => onSelectedMovie(movie)}
                style={{ marginLeft: 3 }}
              >
                <Card sx={{ maxWidth: 345, height: 480 }}>
                  <CardActionArea sx={{ overflow: "hidden", height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                      alt={`Imagem do filme ${movie.title}`}
                    />
                    <CardContent style={{ padding: 24 }}>
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
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        ))
      )}
    </SectionElement>
  );
};
