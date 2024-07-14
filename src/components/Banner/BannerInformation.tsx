import { useMovie } from "@/shared/state/useMovie";
import { PlayArrow } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  font-size: 8rem;
  visibility: hidden;
  opacity: 0;
  transition: 1s;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const BannerInformation: React.FC = () => {
  const movieInBanner = useMovie((state) => state.movieInBanner);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <StyledImage
        src={`https://image.tmdb.org/t/p/w1280${movieInBanner?.backdrop_path}`}
        className={
          movieInBanner?.id === movieInBanner?.id ? "active" : undefined
        }
        alt={`Imagem do filme ${movieInBanner?.backdrop_path}`}
      />
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        position="relative"
        maxWidth={smDown ? 350 : 550}
        zIndex={999999}
        className={
          movieInBanner?.id === movieInBanner?.id ? "active" : undefined
        }
        sx={{
          transform: "scale(0)",
          transition: "1s",
          opacity: 0,
          visibility: "hidden",

          "&.active": {
            transform: "scale(1)",
            visibility: "visible",
            opacity: 1,
          },
        }}
      >
        <Box>
          <Typography variant="h4" component={"h4"}>
            {movieInBanner?.title}
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Typography
                variant="subtitle2"
                component={"span"}
                fontSize={smDown ? 24 :32}
                color={"#eee"}
              >
                {movieInBanner?.release_date}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"span"}
                fontSize={smDown ? 24 :32}
                color={"#eee"}
              >
                15+
              </Typography>
              <Typography
                variant="subtitle2"
                component={"span"}
                fontSize={smDown ? 24 :32}
                color={"#eee"}
              >
                2h 07min
              </Typography>
              <Typography
                variant="subtitle2"
                component={"span"}
                fontSize={smDown ? 24 :32}
                color={"#eee"}
              >
                Aventura
              </Typography>
            </Stack>
          </Typography>
          <Typography variant="body1" component={"p"} color={"#fff"}>
            {movieInBanner?.overview}
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="Apresentar trailer"  size="large">
              <PlayArrow fontSize="inherit" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
