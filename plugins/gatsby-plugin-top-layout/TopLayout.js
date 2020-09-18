/*
 * @Author: gofive
 * @Date: 2020-09-18 02:05:10
 * @LastEditTime: 2020-09-18 20:27:33
 * @Description: Todo
 */
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Layout from "../../src/components/Layout";

export default function TopLayout({ children, ...props }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' rel='stylesheet' />
      </Helmet>
      <Layout {...props}>{children}</Layout>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
