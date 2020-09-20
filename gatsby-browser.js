import React from "react";
import Layout from "./src/components/Layout";
import { isMobile, tabIndexByLocation } from "./src/utils";

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout
      mobile={isMobile()}
      tabval={tabIndexByLocation(props.location.pathname)}
    >
      {element}
    </Layout>
  );
};
