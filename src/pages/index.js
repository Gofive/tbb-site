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

export default function Index() {
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
          }}
        >
          <CarouselItem
            onClick={() => console.log("1")}
            alt="1"
            height="300px"
            src="https://dl.tunbaobao.com/img/slider1.jpeg"
          />
          <CarouselItem
            onClick={() => console.log("2")}
            alt="2"
            height="300px"
            src="https://dl.tunbaobao.com/img/slider2.jpeg"
          />
          <CarouselItem
            onClick={() => console.log("3")}
            alt="3"
            height="300px"
            src="https://dl.tunbaobao.com/img/slider3.jpeg"
          />
        </Carousel>
      </SliderBox>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tbb Me!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
