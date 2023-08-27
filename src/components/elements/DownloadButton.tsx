import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import downloadIcon from "/public/images/others/download.svg";

const DownloadButton = () => {
  return (
    <Button
      sx={{
        background: (theme) => theme.palette.info.main,
        color: (theme) => theme.palette.info.light,
        ":hover": { background: (theme) => theme.palette.info.dark },
        fontFamily: "Raleway",
        fontSize: "12px",
        fontWeight: 600,
        borderRadius: "50px",
      }}
    >
      <Image height={25} width={25} src={downloadIcon} alt="download" />
      &nbsp;&nbsp;Download Resume
    </Button>
  );
};
export default DownloadButton;
