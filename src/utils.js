import routers from "./routers";

export function tabIndexByLocation(pathname) {
  const paths = pathname.split("/");
  return routers.findIndex((a) => a.link === `/${paths[1]}`);
}
