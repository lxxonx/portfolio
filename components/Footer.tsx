import { Box, Container, Link, Typography } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import React, { ReactElement } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <Box
      bgcolor="primary.main"
      zIndex={1}
      position="relative"
      height="120px"
      paddingTop="30px"
    >
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            id="description"
            color="text.primary"
            display="flex"
            flexDirection="column"
          >
            <Typography>© 2021 Onechang Lee</Typography>
            <Typography>
              This web site is made with Nest.js/style component/material UI
            </Typography>
          </Box>
          <Box id="links" display="flex" flexDirection="row">
            <Link href="/contact">
              <EmailIcon
                style={{ color: "white", marginRight: "5px" }}
                fontSize="default"
              />
            </Link>
            <Link href="https://www.instagram.com/______lxxonx/">
              <InstagramIcon
                style={{ color: "white", marginRight: "5px" }}
                fontSize="default"
              />
            </Link>
            <Link href="https://github.com/devleeon">
              <GitHubIcon
                style={{ color: "white", marginRight: "5px" }}
                fontSize="default"
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
