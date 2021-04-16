import { Box, Container, Slide } from "@material-ui/core";
import Head from "next/head";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import Navbar from "../components/Navbar";
import { getWindowHeight } from "../components/utils";

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  font-size: 60px;
  font-family: "ZCOOL QingKe HuangYou", sans-serif;
`;

interface Props {}

function Home({}: Props): ReactElement {
  const [prevIndex, setPrevIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  const scrollEvent = (event: any) => {
    if (event.deltaY > 0) {
      setPrevIndex(currentIndex);
      setCurrentIndex(currentIndex + 1);
    } else if (event.deltaY < 0) {
      if (currentIndex !== 0) {
        setPrevIndex(currentIndex);
        setCurrentIndex(currentIndex - 1);
      }
    }
  };
  console.log(currentIndex);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    document.body.style.cssText = `overflow-y: hidden;`;
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box height={windowHeight} onWheel={scrollEvent}>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Slide in={currentIndex === 0} mountOnEnter unmountOnExit>
        <Box height={windowHeight} bgcolor="primary.main">
          <TextBox>welcome to onechang lee's portfolio</TextBox>
          <Box
            display="flex"
            flexDirection="column"
            position="absolute"
            bottom="30px"
            left="50%"
          >
            <ArrowDropDownCircleRoundedIcon
              style={{ color: "white", marginRight: "5px" }}
              fontSize="large"
            />
          </Box>
        </Box>
      </Slide>
      <Slide
        direction={prevIndex < currentIndex ? "up" : "down"}
        in={currentIndex === 1}
        mountOnEnter
        unmountOnExit
        timeout={{ exit: 0, enter: 500 }}
      >
        <Box
          zIndex={1}
          paddingTop="100px"
          bgcolor="#fff"
          width="100%"
          height={windowHeight}
          position="absolute"
          top={0}
        >
          <Container maxWidth="lg">
            <Box>portfolio</Box>
          </Container>
        </Box>
      </Slide>
      <Slide
        direction={prevIndex < currentIndex ? "up" : "down"}
        in={currentIndex === 2}
        mountOnEnter
        unmountOnExit
        timeout={{ exit: 0, enter: 500 }}
      >
        <Box
          zIndex={1}
          paddingTop="100px"
          bgcolor="#fff"
          width="100%"
          height={windowHeight}
          position="absolute"
          top={0}
          display="flex"
          alignItems="center"
        >
          <Contact />
        </Box>
      </Slide>
    </Box>
  );
}

export default Home;
