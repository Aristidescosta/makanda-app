import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

import { InputSearch } from "../InputSearch";

export interface IHeaderProps {
  whenChangingSearchText?: (newText: string) => void;
}

export const Header: React.FC<IHeaderProps> = ({ whenChangingSearchText }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      direction={"row"}
      component={"header"}
      position={"fixed"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={smDown ? "30px 20px" : "30px 100px"}
      zIndex={2}
      width={"90%"}
      sx={{
        "& .scrolled": {
          borderBottom: "2px solid red",
          borderImage:
            "linear-gradient(90deg, transparent, red, transparent) 30",
          backdropFilter: "blur(20px)",
          padding: "10px 100px",
        },
      }}
      className="scrolled"
    >
      <Link
        to={"/"}
        style={{
          fontSize: smDown ? 24 : 35,
          color: "#FFF",
          letterSpacing: 2,
          fontWeight: 800,
          textDecoration: "none",
          textTransform: "uppercase",
          fontFamily: "Racing Sans One, cursive",
        }}
      >
        Makanda
      </Link>
      <InputSearch whenChangingSearchText={whenChangingSearchText} />
    </Stack>
  );
};
