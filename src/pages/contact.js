import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Me!
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
