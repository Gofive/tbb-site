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
