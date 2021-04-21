import {
  Avatar,
  Box,
  Container,
  Grow,
  Link,
  RootRef,
  Typography,
  useMediaQuery,
  withStyles,
} from "@material-ui/core";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LayOut from "../components/LayOut";
import LanguageIcon from "@material-ui/icons/Language";
import TuneIcon from "@material-ui/icons/Tune";
import BuildIcon from "@material-ui/icons/Build";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import {
  indigo,
  purple,
  blueGrey,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import Head from "next/head";
import { getWindowHeight, timeout } from "../components/utils";
import Footer from "../components/Footer";
import theme from "../styles/theme";
import Bio from "../components/Bio";
import { useScroll } from "../hooks/useScroll";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Greeting = styled(Typography)`
  color: white;
  font-family: "ZCOOL QingKe HuangYou", sans-serif;

  strong {
    font-weight: 500;
    :hover {
    }
  }
`;
const Tap = styled(Box)`
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  justify-content: center;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 600px) {
    padding: 20px;
    :not(:last-child) {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }
  @media only screen and (min-width: 960px) {
    width: 280px;
  }
  @media only screen and (min-width: 1280px) {
    width: 330px;
  }
  width: 100%;
`;
const Title = styled.div`
  font-size: 20px;
  color: ${blueGrey[700]};
  text-align: center;
  width: 100%;
  font-family: "Jua", sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  @media only screen and (min-width: 600px) {
    margin-bottom: 40px;
    margin-top: 30px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 45px;
  }
`;
const Text = styled.div`
  @media only screen and (min-width: 1280px) {
    font-size: 25px;
  }
  font-size: 15px;
  color: ${blueGrey[700]};
  text-align: left;
  width: 100%;
  text-transform: capitalize;
  font-family: "Gamja Flower", cursive;
`;
const Profile = withStyles({
  root: {
    width: "15vw",
    height: "15vw",
    marginRight: "30px",
  },
})(Avatar);
interface Props {}

function About({}: Props): ReactElement {
  const BigIconColor = "secondary.main";
  const names = ["이 원창", "李 元彰", "Onechang Lee"];
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const growIn = useScroll({ id: "in", threshHold: 2 });

  const [name, setName] = useState(names[1]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);
  return (
    <Box>
      <Head>
        <title>About</title>
      </Head>
      <LayOut zIndex={0}>
        <>
          <Wrapper>
            <Box
              width="100%"
              display="flex"
              flexDirection={{ xs: "column", sm: "column", md: "row" }}
              alignItems="center"
            >
              <Profile
                src="/profile.jpg"
                style={{ marginBottom: matches ? "10px" : "0" }}
              />
              <Greeting variant={matches ? "h4" : "h3"}>
                Hi, I'm{" "}
                <strong
                  onMouseOver={() => {
                    setActive(true);
                  }}
                  onMouseOut={() => setActive(false)}
                >
                  {name}
                </strong>
                , a Web developer <br />
                living in Korea <br /> Love to try and learn new things
              </Greeting>
            </Box>
          </Wrapper>
          <Box
            display="flex"
            flexDirection="column"
            position="absolute"
            bottom="30px"
            width="100%"
            alignItems="center"
            color="white"
          >
            <Typography>scroll to explore</Typography>
            <ArrowDropDownCircleRoundedIcon fontSize="large" />
          </Box>
        </>
      </LayOut>
      <Box
        width="100%"
        padding={0}
        zIndex={1}
        bgcolor={"#fff"}
        position="relative"
        height={windowHeight}
        display="flex"
        alignItems="center"
      >
        <Bio />
      </Box>
      <Box
        width="100%"
        zIndex={1}
        marginBottom="0"
        bgcolor={"white"}
        position="relative"
        height={windowHeight - 120}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxWidth="lg">
          <Box
            display={{ xs: "relative", sm: "flex" }}
            paddingTop={{ xs: "100px" }}
            paddingBottom={{ xs: "20px" }}
            flexDirection="row"
            justifyContent="center"
          >
            <Grow in={growIn}>
              <Tap color="secondary.dark">
                <LanguageIcon style={{ fontSize: "10vw" }} />
                <Title>Languages</Title>
                <Text>
                  한국어, English, 日本語, html/css, Javascript, python, Java,
                  Golang, C and more...
                </Text>
              </Tap>
            </Grow>
            <Grow in={growIn} {...(growIn ? { timeout: 700 } : {})}>
              <Tap color="secondary.dark">
                <TuneIcon style={{ fontSize: "10vw" }} />
                <Title>Frameworks</Title>
                <Text>
                  React.js, React native, Node.js, Apollo/Graphql, Django
                </Text>
              </Tap>
            </Grow>
            <Grow in={growIn} {...(growIn ? { timeout: 1000 } : {})}>
              <Tap color="secondary.dark" id="in">
                <BuildIcon style={{ fontSize: "10vw" }} />
                <Title>Tools</Title>
                <Text>
                  Git, Redis, PostgreSQL, Prisma ORM, Docker, Linux, Firebase
                </Text>
              </Tap>
            </Grow>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
