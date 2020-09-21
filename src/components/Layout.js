import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import icon from "../assets/favicon.ico";
import { createMuiTheme, ThemeProvider, CssBaseline, styled } from "@material-ui/core";
import MobileHeader from "./MobileHeader";
import { amber, blue } from "@material-ui/core/colors";
import Footer from "./Footer";

const ChildBox = styled("div")({
  marginTop: (props) => (props.margin ? 64 : 0),
  position: "relative",
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[400],
    },
    secondary: {
      main: amber[200],
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
  },
});

export default function Layout({ tabval, children }) {
  return (
    <>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link rel='icon' type='image/png' href={icon} />
        <title>豚宝宝</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' rel='stylesheet' />
      </Helmet>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header tabval={tabval} client />
        <MobileHeader tabval={tabval} client />
        <ChildBox margin={tabval ? 1 : 0}>{children}</ChildBox>
        <Footer />
      </ThemeProvider>
    </>
  );
}
