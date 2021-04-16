import { Box } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import Contact from "../components/Contact";
import LayOut from "../components/LayOut";
import Navbar from "../components/Navbar";
import { getWindowHeight } from "../components/utils";

interface Props {}

function contact({}: Props): ReactElement {
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box height={windowHeight}>
      <Navbar />
      <Box display="flex" alignItems="center" height="100%">
        <Contact />
      </Box>
    </Box>
  );
}

export default contact;
