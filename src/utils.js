import { UAParser } from "ua-parser-js";
import routers from "./routers";

export function tabIndexByLocation(pathname) {
  if (pathname === "/") {
    return false;
  }
  const paths = pathname.split("/");
  return routers.findIndex((a) => a.link === `/${paths[1]}`);
}

export function isMobile() {
  const parser = new UAParser();
  return parser.getDevice().type ? true : false;
}
