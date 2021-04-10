import React, { ReactElement } from "react";
import LinksList from "./LinksList";
import styled from "styled-components";
import { Box, Container, Link, Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  align-items: center;
  display: flex;
  z-index: 5;
`;

const Logo = styled(Typography)`
  text-transform: uppercase;
  font-size: 30px;
  font-family: "Bebas Neue", cursive;
`;
interface Props {}

function Navbar({}: Props): ReactElement {
  return (
    <Nav>
      <Container maxWidth="xl">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Link href="/" style={{ color: blueGrey[400] }} underline="none">
            <Logo> Onechang Lee </Logo>
          </Link>
          <LinksList />
        </Box>
      </Container>
    </Nav>
  );
}

export default Navbar;
