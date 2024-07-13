import { Box, Typography } from "@mui/material";
import React from "react";

interface IMovieSinopseProps {
  title: string;
  subtitle: string;
}

export const MovieSinopse: React.FC<IMovieSinopseProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box mb={1}>
      <Typography variant="h6" component={"h6"}>
        {title}
      </Typography>

      <Typography variant="subtitle2" component={"span"} fontSize={12}>
        {subtitle}
      </Typography>
    </Box>
  );
};
