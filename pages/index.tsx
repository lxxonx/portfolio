import { Box, Container, useScrollTrigger } from "@material-ui/core";
import { indigo, lightBlue } from "@material-ui/core/colors";
import Head from "next/head";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import LayOut from "../components/LayOut";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  color: white;
  font-size: 100px;
  font-family: "Jua", sans-serif;
`;
const Names = styled.div`
  display: flexbox;
  flex-direction: row;
  align-items: baseline;
`;
const ChineseName = styled.div`
  margin-left: 30px;
  color: white;
  font-size: 150px;
  font-family: "ZCOOL QingKe HuangYou", cursive;
`;
const KoreanName = styled.div`
  color: white;
  font-size: 100px;
  font-family: "Jua", sans-serif;
`;
const Portfolio = styled.div`
  color: white;
  font-size: 100px;
  text-transform: uppercase;
  font-family: "Jua", sans-serif;
`;
const Contents = styled.div`
  width: 100%;
  background-color: #fff;
`;
interface Props {}

function Home({}: Props): ReactElement {
  const trigger = useScrollTrigger();
  console.log(trigger);
  return (
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>
      <LayOut zIndex={0}>
        <>
          <TextBox>
            <Names>
              <Text>Hi! I am </Text>
              <ChineseName> 李 元彰,</ChineseName>
            </Names>
            <Text>A Web Developer,</Text>
            <Text>Living in Taejeon, KR</Text>
          </TextBox>
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
      <Box zIndex={1} paddingTop="100px" bgcolor="#fff" position="relative">
        <Contents>
          <Contact />
        </Contents>
      </Box>
    </Wrapper>
  );
}

export default Home;
