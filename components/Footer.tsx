import { Box, Container } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box>footer</Box>
      </Container>
    </Box>
  );
}

export default Footer;
