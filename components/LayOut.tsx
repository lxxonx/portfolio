import { Box, Container } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const ImageWrapper = styled.div`
  position: sticky;
  z-index: 0;
  top: 0;
`;
interface Props {
  children: ReactElement;
  zIndex: number;
}
function getWindowHeight() {
  if (typeof window !== "undefined") {
    const { innerHeight: height } = window;
    return height;
  }
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
