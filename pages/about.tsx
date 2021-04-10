import { Box, Container, Link, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import styled from "styled-components";
import LayOut from "../components/LayOut";
import LanguageIcon from "@material-ui/icons/Language";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import BuildIcon from "@material-ui/icons/Build";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import { indigo, purple, blueGrey } from "@material-ui/core/colors";
import Head from "next/head";

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
  font-family: "ZCOOL QingKe HuangYou", "Jua", sans-serif;
`;
const Tap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 960px) {
    width: 280px;
  }
  @media only screen and (min-width: 1280px) {
    width: 380px;
  }
  width: 100%;
  :not(:last-child) {
    margin-right: 50px;
  }
`;
const Title = styled.div`
  @media only screen and (min-width: 1280px) {
    font-size: 2vw;
  }
  font-size: 20px;
  color: ${blueGrey[700]};
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 30px;
`;
const Text = styled.div`
  @media only screen and (min-width: 1280px) {
    font-size: 1.5vw;
  }
  font-size: 15px;
  color: ${blueGrey[700]};
  text-align: left;
  width: 100%;
  text-transform: capitalize;
`;
interface Props {}

function About({}: Props): ReactElement {
  const BigIconColor = purple[900];
  return (
    <Box>
      <Head>
        <title>About</title>
      </Head>
      <LayOut zIndex={0}>
        <>
          <Wrapper>
            <Greeting variant="h3">
              Hi, I'm 李 元彰, a Web developer living in Korea <br /> Love to
              try and learn new things <br /> Always down for a good coffee or
              beer <br /> If you'd like to have a chat with me, <br />
              please contact me withe these channels
            </Greeting>
            <Box
              display="flex"
              flexDirection="column"
              position="absolute"
              bottom="-300px"
            >
              <Box display="flex" flexDirection="row">
                <EmailIcon
                  style={{ color: "white", marginRight: "5px" }}
                  fontSize="small"
                />
                <Link href="/#contact">
                  <Typography style={{ color: "white" }}>
                    developerleeon@gmail.com
                  </Typography>
                </Link>
              </Box>
              <Box display="flex" flexDirection="row">
                <InstagramIcon
                  style={{ color: "white", marginRight: "5px" }}
                  fontSize="small"
                />
                <Link href="https://www.instagram.com/______lxxonx/">
                  <Typography style={{ color: "white" }}>
                    ______lxxonx
                  </Typography>
                </Link>
              </Box>
              <Box display="flex" flexDirection="row">
                <GitHubIcon
                  style={{ color: "white", marginRight: "5px" }}
                  fontSize="small"
                />
                <Link href="https://github.com/devleeon">
                  <Typography style={{ color: "white" }}>devleeon</Typography>
                </Link>
              </Box>
            </Box>
          </Wrapper>
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
      <Box zIndex={1} paddingTop="100px" bgcolor="white" position="relative">
        <Container maxWidth="lg">
          <Box display="flex" flexDirection="row" height="2000px">
            <Tap>
              <LanguageIcon style={{ color: BigIconColor, fontSize: "10vw" }} />
              <Title>Languages I speak</Title>
              <Text>
                Fluent: 한국어, English, html, css, Javascript
                <br />
                Learning: 日本語, Golang, python, Java, C and more...
              </Text>
            </Tap>
            <Tap>
              <BuildIcon style={{ color: BigIconColor, fontSize: "10vw" }} />
              <Title>Tools I can Use</Title>
              <Text>
                Apollo, Express, Graphql, node.js, prismaORM, react.js, react
                native, next.js and more...
              </Text>
            </Tap>
            <Tap>
              <LanguageIcon style={{ color: BigIconColor, fontSize: "10vw" }} />
              <Title>Tools I can Use</Title>
              <Text>Who Is This Guy?</Text>
            </Tap>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
