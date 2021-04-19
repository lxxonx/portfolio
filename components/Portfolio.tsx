import {
  Box,
  Container,
  Link,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  deepPurple,
  green,
  indigo,
  lightGreen,
} from "@material-ui/core/colors";
import React, { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = withStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    marginBottom: "20px",
  },
})(Box);
const ContentsWrapper = styled(Box)`
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 0px;
    border: 0;
  }
`;
const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  height: 100%;
  justify-content: center;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  align-items: center;
  position: relative;
  :not(:last-child) {
    margin-right: 30px;
  }
`;
const Cover = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  p {
    display: none;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    p {
      display: block;
      color: white;
      font-size: 20px;
      font-weight: 600;
    }
  }
  :link {
    text-decoration: none;
  }
`;
const Thumbnail = styled.img`
  height: 100%;
  width: 300px;
`;
const Phonenail = styled.img`
  width: 120px;
  height: 100%;
`;
const List = styled(Container)`
  position: relative;
`;
const Bar = styled.div`
  position: absolute;
  width: 20px;
  height: 250px;
  background-color: ${indigo[900]};
  right: 0;
  top: 0;
  z-index: 1;
  box-shadow: rgba(27, 31, 35, 0.5) -10px 0px 15px;
`;
interface ContentsProps {
  name: string;
  filename: string;
}
function Contents({ name, filename }: ContentsProps): ReactElement {
  return (
    <Content>
      <Cover href={`/portfolio/${filename}`}>
        <p>{name}</p>
      </Cover>
      <Thumbnail src={`/thumbnails/${filename}.png`} />
    </Content>
  );
}
interface Props {}

function Portfolio({}: Props): ReactElement {
  return (
    <>
      <Container maxWidth="md">
        <Wrapper paddingTop="70px" color="text.secondary">
          <Typography
            variant="h4"
            style={{ fontFamily: "ZCOOL QingKe HuangYou" }}
          >
            portfolio
          </Typography>
        </Wrapper>
      </Container>
      <Box bgcolor="primary.main" paddingY="30px" position="relative">
        <List maxWidth="lg">
          <Bar />
          <ContentsWrapper display="flex" flexDirection="row">
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
          </ContentsWrapper>
        </List>
      </Box>
      <Container maxWidth="md">
        <Wrapper paddingTop="20px" color="text.secondary">
          <Typography
            variant="h4"
            style={{ fontFamily: "ZCOOL QingKe HuangYou" }}
          >
            portfolio
          </Typography>
        </Wrapper>
      </Container>
      <Box bgcolor="primary.main" paddingY="30px" position="relative">
        <List maxWidth="lg">
          <Bar />
          <ContentsWrapper display="flex" flexDirection="row">
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
            <Contents name="Instagram clone" filename="instaclone" />
          </ContentsWrapper>
        </List>
      </Box>
    </>
  );
}

export default Portfolio;
