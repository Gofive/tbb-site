/*
 * @Author: gofive
 * @Date: 2020-09-18 19:19:05
 * @LastEditTime: 2020-09-18 19:19:14
 * @Description: Todo
 */
import React from "react";
import Layout from "./src/components/Layout";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export default wrapPageElement;
