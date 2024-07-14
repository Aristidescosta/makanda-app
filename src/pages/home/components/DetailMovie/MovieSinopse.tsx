import { getFormattedCurrency } from "@/shared/utils/helpers";
import { Box, Typography } from "@mui/material";
import React from "react";

interface IMovieSinopseProps {
  title: string;
  subtitle: string | number;
  fontSize: number
}

export const MovieSinopse: React.FC<IMovieSinopseProps> = ({
  title,
  fontSize,
  subtitle,
}) => {
  return (
    <Box mb={1}>
      <Typography variant="h6" component={"h6"}>
        {title}
      </Typography>

      <Typography variant="subtitle2" component={"span"} fontWeight={300} fontSize={fontSize}>
        {typeof subtitle === "string" ? subtitle : getFormattedCurrency(subtitle)}
      </Typography>
    </Box>
  );
};
