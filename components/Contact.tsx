import { Box, Container, TextField, withStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import styled from "styled-components";
const TextInput = withStyles({
  root: {
    width: "300px",
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

const Message = withStyles({
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
const Wrapper = styled.div`
  padding: 100px;
`;
const Text = styled.div`
  color: white;
`;
const Form = styled.form`
  width: 100%;
`;

interface Props {}

function Contact({}: Props): ReactElement {
  return (
    <Container maxWidth={"sm"}>
      <Text>contact</Text>
      <Form>
        <Box
          display="flex"
          flexDirection={{ sm: "column", md: "row" }}
          justifyContent="space-between"
        >
          <TextField label="name" margin="normal" />
          <TextField label="email" margin="normal" />
        </Box>
        <TextField
          label="message"
          variant="filled"
          fullWidth={true}
          margin="normal"
          multiline={true}
        />
      </Form>
      <Wrapper />
    </Container>
  );
}

export default Contact;
