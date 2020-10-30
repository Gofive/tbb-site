import React, { useState, useEffect, useCallback } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { pink, amber, purple } from "@material-ui/core/colors";
import { navigate } from "gatsby";

export default function About() {
 
  const [size, setSize] = useState({ x: 0, y: 0 });
  const ResizeFunc = useCallback(() => {
    if (window === undefined)
      return;
    console.log(window.innerWidth, window.innerHeight);
    setSize({ x: window.innerWidth });
    const video = document.querySelector("#tbb-v");
    if (video) {
      setTimeout(() => {
        if (window.innerHeight - video.clientHeight > 0) {
          video.style.top = "0px";
          video.style.left = `${window.innerWidth - video.clientWidth}px`;
        } else {
          video.style.top = `${window.innerHeight - video.clientHeight}px`;
          video.style.left = "0px";
        }
      }, 100);
    }
  }, []);
  useEffect(() => {
    if (window === undefined)
      return;
    window.addEventListener("resize", ResizeFunc);
    setSize({ x: window.innerWidth });
    const video = document.querySelector("#tbb-v");
    if (video) {
      setTimeout(() => {
        if (window.innerHeight - video.clientHeight > 0) {
          video.style.top = "0px";
          video.style.left = `${window.innerWidth - video.clientWidth}px`;
        } else {
          video.style.top = `${window.innerHeight - video.clientHeight}px`;
          video.style.left = "0px";
        }
      }, 100);
    }
    return () => window.removeEventListener("resize", ResizeFunc);
  }, []);
  return (
    <>
      <video id='tbb-v' style={{ width: size.x, position: "relative" }} crossOrigin='anonymous' autoPlay loop muted>
        <source src='http://apks.tunbaobao.com/tbb.mp4' type='video/mp4' />
      </video>
      <Container maxWidth='lg'>
        <Box style={{ height: 400, backgroundColor: pink[100] }} my={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            幼儿园解决方案
          </Typography>
        </Box>
        <Box style={{ height: 400, backgroundColor: amber[100] }} my={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            早教解决方案
          </Typography>
        </Box>
        <Box style={{ height: 400, backgroundColor: purple[100] }} my={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            幼儿周边产品介绍
          </Typography>
        </Box>
      </Container>
    </>
  );
}
