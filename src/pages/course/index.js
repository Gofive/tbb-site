/*
 * @Author: gofive
 * @Date: 2020-09-22 15:41:37
 * @LastEditTime: 2020-09-22 15:42:19
 * @Description: Todo
 */
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Course() {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Course Me!
        </Typography>
      </Box>
    </Container>
  );
}
