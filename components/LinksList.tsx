import React, { ReactElement } from "react";
import styled from "styled-components";
import { Box, Link, Typography } from "@material-ui/core";
import { InfoRounded } from "@material-ui/icons";
import { blueGrey } from "@material-ui/core/colors";

const TextLink = styled(Link)`
  :not(:last-child) {
    margin-right: 15px;
  }
  color: ${blueGrey[400]};
  :hover {
    text-decoration: line-through;
  }
`;
const Text = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;
interface Props {}

function LinksList({}: Props): ReactElement {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <TextLink href="/#contact" underline="none">
        <Text> Contact</Text>
      </TextLink>
      <TextLink href="/about" underline="none">
        <Text> About</Text>
      </TextLink>
    </Box>
  );
}

export default LinksList;
