import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout tabval={0}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tbb Me!
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
