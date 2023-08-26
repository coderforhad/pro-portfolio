import { List, ListItem } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div style={{textAlign: "center", marginTop:"12vh"}}>
      Copyright &copy; {1900 + new Date().getYear()}
      <a href="https://bd.linkedin.com/in/forhadahmedcse"> {" "}
        Forhad Ahmed
      </a> {" "}
      All Rights Reserved.
    </div>
  );
}
