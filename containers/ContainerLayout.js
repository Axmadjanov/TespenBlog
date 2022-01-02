import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const colors = [
  "#FAF2E7",
  "#F8D6AF",
  "#080809",
  "#ABCDFD",
  "#AEA192",
  "#59595A",
  "#66976D",
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#cc00b1",
    },
    secondary: {
      main: "#F8D6AF",
    },
    background: {
      default: "#F6F7FA",
      paper: "#FAF2E7",
    },
    dark: {
      main: "#080809",
    },
  },
});

const ContainerLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {props.children}
    </ThemeProvider>
  );
};

export default ContainerLayout;
