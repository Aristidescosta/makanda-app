import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

import React from "react";

import { IHeaderProps } from "../Header";

export const InputSearch: React.FC<IHeaderProps> = ({ whenChangingSearchText }) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        ),
      }}
      onChange={(e) => whenChangingSearchText?.(e.target.value)}
      placeholder="Pesquise por um filme..."
      variant="standard"
    />
  );
};
