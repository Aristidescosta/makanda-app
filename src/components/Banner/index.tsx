import { MovieSwiper } from "@/pages/home/components";
import { IMovieType } from "@/shared/types";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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

export const BannerMoves: React.FC = () => {
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
        p={"0 100px"}
        overflow={"hidden"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        pb={100}
      >
        <StyledImage src="batman.jpg" className="active" alt="" />
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={2}
          position="relative"
          maxWidth={550}
          zIndex={999999}
          className="active"
          sx={{
            transform: "scale(0)",
            transition: "1s",
            opacity: 0,
            visibility: "hidden",
            /* visibility: "visible", */

            "&.active": {
              transform: "scale(1)",
              visibility: "visible",
              opacity: 1,
            },
          }}
        >
          <Box>
            <Typography variant="h4" component={"h4"}>
              BATMAN
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Typography
                  variant="subtitle2"
                  component={"span"}
                  fontSize={32}
                  color={"#eee"}
                >
                  2023
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"span"}
                  fontSize={32}
                  color={"#eee"}
                >
                  15+
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"span"}
                  fontSize={32}
                  color={"#eee"}
                >
                  2h 07min
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"span"}
                  fontSize={32}
                  color={"#eee"}
                >
                  Aventura
                </Typography>
              </Stack>
            </Typography>
            <Typography variant="body1" component={"p"} color={"#fff"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              quisquam rem obcaecati nostrum asperiores iusto! Quod esse natus
              officia similique voluptas quasi, dignissimos, sed reprehenderit
              quidem impedit culpa, maiores officiis!
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Contained</Button>
              <Button variant="contained" disabled>
                Disabled
              </Button>
              <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <MovieSwiper movies={movies} />
    </Box>
  );
};
