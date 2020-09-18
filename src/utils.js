import routers from "./routers";

export function tabIndexByLocation() {
  console.log(routers);

  return routers.findIndex((a) => {
    console.log(a.link);
    return "/about/".includes(a.link);
  });
}
