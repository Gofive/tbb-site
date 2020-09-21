import React from "react";
import Layout from "./src/components/Layout";
import { tabIndexByLocation } from "./src/utils";

export const wrapPageElement = ({ element, props }) => {
  return <Layout tabval={tabIndexByLocation(props.location.pathname)}>{element}</Layout>;
};
