import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

const CardAbout = ({ title, content, icon, color}) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        height: "100%",
        width: lgUp ? "49%" : "100%",
        borderRadius: "20px",
        background: ((theme)=> theme.palette.mode === "dark" ? theme.palette.background.default : `${color}`),
        padding: "10px",
      }}
    >
      <Typography 
        variant="subtitle1" 
        sx={{
          display:"flex", 
          alignItems:"center", 
          gap: "10px",   
        }}
      >
        <Image width={24}
            height={24}
            src={icon}
            alt="icons"
        />
        {title}
      </Typography>
      {content}
    </Box>
  );
};
export default CardAbout;
