/*
 * @Author: gofive
 * @Date: 2020-09-21 08:57:54
 * @LastEditTime: 2020-09-22 16:31:47
 * @Description: Todo
 */
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
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 64px)",
});

const Content = styled("div")({
  flexGrow: 1,
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
  typography: { 
    htmlFontSize: 16,
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
          fontSize:"62.5%"
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
        <ChildBox margin={tabval ? 1 : 0}>
          <Content>{children}</Content>

          <Footer />
        </ChildBox>
      </ThemeProvider>
    </>
  );
}
