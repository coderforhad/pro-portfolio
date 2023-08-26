import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Info, InfoTitle, InfoGrid } from "src/layouts/dashboard/LayoutStyles";
import phoneIcon from "/public/images/others/phone-icon.svg";
import emailIcon from "/public/images/others/email.svg";
import locationIcon from "/public/images/others/location.svg";

const BasicInfo = () => {
  return (
    <>

          <InfoGrid>
            <Grid>
              <Image 
                height={20} 
                width={20} 
                src={phoneIcon} 
                alt="Phone" 
              />
            </Grid>
            <Grid>
              <InfoTitle>Phone</InfoTitle>
              <Info>+254723909353</Info>
            </Grid>
          </InfoGrid>
          <hr />
          <InfoGrid>
            <Grid>
              <Image 
                height={20} 
                width={20} 
                src={emailIcon} 
                alt="Email" 
              />
            </Grid>
            <Grid>
              <InfoTitle>Email</InfoTitle>
              <Info>beatricewambuimbugua@gmail.com</Info>
            </Grid>
          </InfoGrid>
          <hr />
          <InfoGrid>
            <Grid>
              <Image 
                height={20} 
                width={20} 
                src={locationIcon} 
                alt="Location" 
              />
            </Grid>
            <Grid>
              <InfoTitle>Location</InfoTitle>
              <Info>Nairobi, Kenya</Info>
            </Grid>
          </InfoGrid>

    </>
  );
};
export default BasicInfo;
