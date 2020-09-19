/*
 * @Author: gofive
 * @Date: 2020-09-18 02:05:10
 * @LastEditTime: 2020-09-18 19:21:05
 * @Description: Todo
 */
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout tabval={1}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Me!
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
