import { DRAWER_OPTIONS } from "@/shared/utils/constantes";
import { List, ListItem, Stack, useMediaQuery, useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

import { InputSearch } from "../InputSearch";

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s;
  text-transform: "uppercase";

  &:hover {
    color: #ff3700;
  }
`;

export interface IHeaderProps{
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

      {/* <List
        component="nav"
        sx={{
          display: "flex",
        }}
      >
        {DRAWER_OPTIONS.map((option) => (
          <ListItem
            key={option.id}
            sx={{
              listStyle: "none",
              textTransform: "uppercase",
            }}
          >
            <StyledLink to={option.path}>{option.name}</StyledLink>
          </ListItem>
        ))}
      </List> */}
      <InputSearch whenChangingSearchText={whenChangingSearchText} />
    </Stack>
  );
};
