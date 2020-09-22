/*
 * @Author: gofive
 * @Date: 2020-09-18 19:17:59
 * @LastEditTime: 2020-09-22 16:36:34
 * @Description: Todo
 */
import { Box, styled, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { ReactComponent as NotFoundSvg } from "../assets/notfound.svg";

const NotFoundBox = styled(Box)({
  marginTop: 100,
  textAlign: "center",
});

export default class NotFound extends Component {
  render() {
    return (
      <NotFoundBox>
        <NotFoundSvg />
        <Typography variant='h3' component='p'>
          404
        </Typography>
        <Typography variant='h5' component='p'>
          对不起，页面未找到
        </Typography>
      </NotFoundBox>
    );
  }
}
