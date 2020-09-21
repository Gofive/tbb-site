/*
 * @Author: gofive
 * @Date: 2020-09-21 08:57:54
 * @LastEditTime: 2020-09-21 13:40:56
 * @Description: Todo
 */
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function School() {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          School Me!
        </Typography>
        <Typography variant='h4' component='h1' gutterBottom>
          School Me!
        </Typography>
        <Typography variant='h4' component='h1' gutterBottom>
          School Me!
        </Typography>
        <Typography variant='h4' component='h1' gutterBottom>
          School Me!
        </Typography>
      </Box>
    </Container>
  );
}
