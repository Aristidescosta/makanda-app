import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";
import React from "react";

export const CircularProgressWithLabel: React.FC<
  CircularProgressProps & { value: number }
> = ({ value, ...props }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress value={100} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: "4px",
          bottom:  0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};
