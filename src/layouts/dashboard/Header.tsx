import React from "react";
import { HeaderMainBox, HeaderSubBox } from "./LayoutStyles";
import Image from "next/image";
//@ts-ignore
import modeIcon from "/public/images/others/modebutton.svg";
//@ts-ignore
import logoIcon from "/public/images/others/logo_web.png";

const Header = () => {
  return (
    <HeaderMainBox>
      <Image height={40} width={250} src={logoIcon} alt="mode button" />
      <HeaderSubBox
        sx={{
          ":hover": {
            background: "linear-gradient(127deg, #000 0%, #E80505 100%)",
            color: "white",
            transition: "all 0.3s",
          },
          cursor: "pointer",
        }}
      >
        <Image
          style={{
            borderRadius: "50%",
          }}
          height={20}
          width={20}
          src={modeIcon}
          alt="mode button"
        />
      </HeaderSubBox>
    </HeaderMainBox>
  );
};
export default Header;