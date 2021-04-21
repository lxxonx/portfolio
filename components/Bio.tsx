import {
  Box,
  CardMedia,
  Container,
  Grow,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { useScroll } from "../hooks/useScroll";

const BodyText = withStyles({
  root: {
    marginTop: "5px",
    marginBottom: "15px",
    width: "100%",
  },
})(Typography);

const Image = styled.img`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`;
interface Props {}

function Bio({}: Props): ReactElement {
  const [growIn, setGrowIn] = useState(false);
  const onScroll = () => {
    if (window?.innerHeight < document.documentElement.scrollTop) {
      setGrowIn(true);
    }
    if (window?.innerHeight * 2 < document.documentElement.scrollTop) {
      setGrowIn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Box height="100%" width="100%" display="flex" justifyContent="center">
      <Container maxWidth="md">
        <Box
          paddingTop="100px"
          display={{ xs: "relative", sm: "flex" }}
          flexDirection="row"
          width="100%"
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignContent="center"
          id="bio"
        >
          <Box color="text.secondary">
            <Typography variant="h3">Biography</Typography>
            <BodyText variant="body1">
              Born and raised in Korea <br />
            </BodyText>
            <BodyText>
              Majored Business, Minored Computer Science in university
              <br />
            </BodyText>
          </Box>
          <Box width="100%" height="100%" position="relative" display="flex">
            <Grow in={growIn}>
              <CardMedia
                title="childhood"
                image="/childhood.jpg"
                component="img"
                style={{
                  height: "300px",
                  width: "300px",
                  zIndex: -1,
                  display: "flex",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              />
            </Grow>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Bio;
