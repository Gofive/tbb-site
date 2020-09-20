import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@material-ui/core";

const SliderBox = styled(Box)({
  height: 300,
  "& .slick-slider": {
    height: "100%",
  },
});

const SliderItem = styled(Box)({
  height: 330,
  backgroundImage: (props) => `url(${props.url})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export default function Index() {
  return (
    <>
      <SliderBox>
        <Slider
          autoplay
          slidesToShow={1}
          slidesToScroll={1}
          dots
          arrows={false}
        >
          <SliderItem url="https://dl.tunbaobao.com/img/slider1.jpeg" />
          <SliderItem url="https://dl.tunbaobao.com/img/slider2.jpeg" />
          <SliderItem url="https://dl.tunbaobao.com/img/slider3.jpeg" />
        </Slider>
      </SliderBox>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tbb Me!
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
