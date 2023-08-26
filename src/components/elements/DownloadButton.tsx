import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import downloadIcon from "/public/images/others/download.svg";

const DownloadButton = () => {
  return (
    <Button
      sx={{
        background: "linear-gradient(127deg, #FF9C1A 0%, #E80505 100%)",
        color: "#F2F7FC",
        fontFamily: "Raleway",
        fontSize: "12px",
        fontWeight: 600,
        borderRadius: "50px",
      }}
    >
      <Image 
        height={25} 
        width={25} 
        src={downloadIcon} 
        alt="download" 
      />
      &nbsp;&nbsp;Download Resume
    </Button>
  );
};
export default DownloadButton