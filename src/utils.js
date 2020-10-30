/*
 * @Author: gofive
 * @Date: 2020-09-21 08:57:54
 * @LastEditTime: 2020-09-22 16:34:28
 * @Description: Todo
 */
import { UAParser } from "ua-parser-js";
import routers from "./routers";

export function tabIndexByLocation(pathname) {
  if (pathname === "/") {
    return 1;
  }
  const index = routers.findIndex((a) => pathname === (a.link)||pathname === (a.link+"/"));
  return index > -1 ? index + 1 : false;
}

export function isMobile() {
  const parser = new UAParser();
  return parser.getDevice().type ? true : false;
}
