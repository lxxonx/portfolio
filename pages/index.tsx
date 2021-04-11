import { Box } from "@material-ui/core";
import Head from "next/head";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import LayOut from "../components/LayOut";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import { useScroll } from "../hooks/useScroll";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 1s;
  overflow: hidden;
`;

const Page = styled(Box)`
  transition: 1s;
`;
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

const Contents = styled.div`
  width: 100%;
  background-color: #fff;
`;
interface Props {}

function Home({}: Props): ReactElement {
  const [sliderIndex, setSliderIndex] = useState(0);
  console.log(sliderIndex);
  const scrollEvent = (event: any) => {
    console.log(event);
    console.log(document.documentElement.clientHeight);

    if (event.deltaY > 0) {
      setSliderIndex(sliderIndex + 1);
      document.documentElement.scrollTop +=
        document.documentElement.clientHeight + 1;
    } else if (event.deltaY < 0) {
      if (sliderIndex !== 0) {
        setSliderIndex(sliderIndex - 1);
        document.documentElement.scrollTop -=
          document.documentElement.clientHeight + 1;
      }
    }
  };
  useEffect(() => {
    document.body.style.cssText = `overflow-y: hidden;`;
    return () => {};
  }, []);
  return (
    <Wrapper onWheel={scrollEvent}>
      <Head>
        <title>Home</title>
      </Head>
      <Page>
        <LayOut zIndex={0}>
          <>
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
          </>
        </LayOut>
      </Page>
      <Page>
        <Box zIndex={1} paddingTop="100px" bgcolor="#fff" width="100%">
          <Contents>
            <Contact />
          </Contents>
        </Box>
      </Page>
    </Wrapper>
  );
}

export default Home;
