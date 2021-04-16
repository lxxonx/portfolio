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
      height="200px"
      paddingY="50px"
    >
      <Container maxWidth="md">
        <Box>
          <Box id="links">
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
                <Typography style={{ color: "white" }}>______lxxonx</Typography>
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
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
