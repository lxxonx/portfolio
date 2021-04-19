import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e",
      light: "#534bae",
      dark: "#000051",
    },
    secondary: {
      main: "#00838f",
      light: "#4fb3bf",
      dark: "#005662",
    },
    text: { primary: "#ffffff", secondary: "#000000" },
  },
});

export default theme;
