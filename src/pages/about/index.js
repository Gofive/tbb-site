import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";
import Carousel from "nuka-carousel";
import { blue } from "@material-ui/core/colors";

const SliderBox = styled(Box)({
  height: 300,
  "& .slick-slider": {
    height: "100%",
  },
});

const CarouselItem = styled("img")({
  objectFit: "cover",
});

export default function About() {
  return (
    <>
      <SliderBox>
        <Carousel
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          autoplay
          wrapAround
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: blue[400],
              outline: "none",
            },
          }}>
          <CarouselItem alt='1' height='300px' src='https://dl.tunbaobao.com/img/slider1.jpeg' />
          <CarouselItem alt='2' height='300px' src='https://dl.tunbaobao.com/img/slider2.jpeg' />
          <CarouselItem alt='3' height='300px' src='https://dl.tunbaobao.com/img/slider3.jpeg' />
        </Carousel>
      </SliderBox>
      <Container maxWidth='lg'>
        <Box my={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            About Me!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
