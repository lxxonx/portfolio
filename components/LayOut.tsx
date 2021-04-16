import { Box, Container, Slide, useScrollTrigger } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { getWindowHeight } from "./utils";

interface Props {
  children: ReactElement;
  zIndex: number;
}

function LayOut({ children, zIndex }: Props): ReactElement {
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Box position="sticky" top={0} zIndex={zIndex}>
        <Box height={windowHeight} bgcolor="primary.main">
          {children}
        </Box>
      </Box>
      <Navbar />
    </>
  );
}

export default LayOut;
