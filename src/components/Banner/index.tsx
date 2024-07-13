import { MovieSwiper } from "@/pages/home/components";
import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import { useMovie } from "@/shared/state/useMovie";
import { MovieResult } from "@/shared/types";

import React from "react";

import { BannerInformation } from "./BannerInformation";

export interface IBannerMovesProps {
  movies: MovieResult[];
  isLoading: boolean;
}

export const BannerMoves: React.FC<IBannerMovesProps> = ({
  movies,
  isLoading,
}) => {
  const movieInBanner = useMovie((state) => state.movieInBanner);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      position={"relative"}
      width={"100%"}
      minHeight={"100vh"}
      /* p={"0 100px"} */
      overflow={"hidden"}
      sx={{
        transition: "0.5s",

        "& ::after": {
          position: "absolute",
          content: '""',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          /* background: "rgba(0, 0, 0, 0.01)", */
        },
      }}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        height={"100vh"}
        p={smDown ? "0 20px" : "0 100px"}
        overflow={"hidden"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        pb={100}
      >
        {!movieInBanner ? <CircularProgress /> : <BannerInformation />}
      </Box>
      {isLoading ? <CircularProgress /> : <MovieSwiper movies={movies} />}
    </Box>
  );
};
