import {
  Box,
  Container,
  Grow,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import styled from "styled-components";

const BodyText = withStyles({
  root: {
    marginTop: "5px",
    marginBottom: "15px",
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
  return (
    <Container maxWidth="md">
      <Box
        display={{ xs: "relative", sm: "flex" }}
        flexDirection="row"
        width="100%"
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignContent="center"
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
        <Box
          width="100%"
          height="100%"
          position={{ xs: "absolute", sm: "relative" }}
          top="100px"
        >
          <Grow>
            <Image src="/childhood.jpg" />
          </Grow>
        </Box>
      </Box>
    </Container>
  );
}

export default Bio;
