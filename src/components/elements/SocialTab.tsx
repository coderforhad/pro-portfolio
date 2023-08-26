import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import facebookIcon from "/public/images/social/facebook-icon.svg";
import linkedinIcon from "/public/images/social/linked-in.svg";
import twitterIcon from "/public/images/social/twitter.svg";
import gitIcon from "/public/images/social/git.svg";
import { SocialGrid } from "src/layouts/dashboard/LayoutStyles";

const SocialTab = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "20px",
      }}
    >
      <SocialGrid>
        <Image 
            height={30} 
            width={30} 
            src={facebookIcon} 
            alt="Facebook" 
        />
      </SocialGrid>
      <SocialGrid>
        <Image 
            height={30} 
            width={30} 
            src={linkedinIcon} 
            alt="LinkedIn" 
        />
      </SocialGrid>
      <SocialGrid>
        <Image 
            height={30} 
            width={30} 
            src={twitterIcon} 
            alt="Twitter" 
        />
      </SocialGrid>
      <SocialGrid>
        <Image 
            height={30} 
            width={30} 
            src={gitIcon} 
            alt="Git" 
        />
      </SocialGrid>
    </Grid>
  );
};
export default SocialTab;