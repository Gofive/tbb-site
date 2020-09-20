import { Box, styled } from "@material-ui/core";
import React from "react";

const ContentBox = styled(Box)({
  maxWidth: 1280,
  width: "100%",
  display: "flex",
  alignItems: "center",
});

export default function Content({ children, ...props }) {
  return <ContentBox {...props}>{children}</ContentBox>;
}
