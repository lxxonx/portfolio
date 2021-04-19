import {
  Box,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  withStyles,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Footer from "./Footer";
const TextInput = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& input": { color: "white" },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
  },
})(TextField);

const Wrapper = withStyles({
  root: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
})(Box);
const Text = styled.div`
  color: black;
`;
const Form = styled.form`
  border: 2px solid ${indigo[500]};
  max-width: 600px;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

interface Props {}

function Contact({}: Props): ReactElement {
  const ltmd = useMediaQuery("(min-width:960px)");
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          style={{
            marginBottom: "20px",
            fontFamily: "ZCOOL QingKe HuangYou",
            color: indigo[900],
          }}
        >
          Contact Me
        </Typography>
      </Container>
      <Box
        width="100%"
        bgcolor="primary.main"
        paddingBottom="0px"
        paddingTop="40px"
      >
        <Container maxWidth={"md"}>
          <Form>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "column", md: "row" }}
              justifyContent="space-between"
            >
              <TextField
                label="name"
                style={{ marginRight: ltmd ? "20px" : 0 }}
              />
              <TextField label="email" fullWidth={true} />
            </Box>
            <TextField label="subject" margin="normal" fullWidth={true} />

            <TextField
              label="message"
              variant="filled"
              fullWidth={true}
              margin="normal"
              multiline={true}
              rows={10}
            />
          </Form>
        </Container>
        <Footer />
      </Box>
    </Wrapper>
  );
}

export default Contact;
