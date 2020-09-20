import React from "react";
import {
  Box,
  Tabs,
  Tab,
  useTheme,
  withStyles,
  styled,
} from "@material-ui/core";
import { ReactComponent as LogoSvg } from "../assets/logo-single.svg";
import { amber, blue, grey, purple, yellow } from "@material-ui/core/colors";
import routers from "../routers";
import { navigate } from "gatsby";

const HeaderDiv = styled(Box)({
  width: "100%",
  height: 64,
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
});

const HeaderMain = styled(Box)({
  maxWidth: 1024,
  display: "flex",
  justifyContent: "center",
});

const Logo = styled(Box)({
  width: 160,
  height: 80,
  color: blue[400],
  backgroundColor: amber[200],
  borderRadius: "100% 100% 100% 100% / 0% 0% 40% 40%",
  margin: "0 48px",
  "&:hover": {
    cursor: "pointer",
  },
});

const StyledTab = withStyles({
  root: {
    textTransform: "none",
    "&:hover": {
      color: `${blue[400]}`, //鼠标下Tab的颜色
    },
    minWidth: "unset",
  },

  wrapper: {
    fontSize: "1rem",
  },
  textColorPrimary: {
    color: grey[800],
  },
})((props) => <Tab {...props} />);

const StyledTabs = withStyles({
  flexContainer: {
    height: "100%",
  },
})((props) => <Tabs {...props} />);

export default function Header(props) {
  const theme = useTheme();
  return (
    <HeaderDiv>
      <HeaderMain>
        <Logo onClick={() => navigate("/")}>
          <LogoSvg fill={blue[500]} width={160} height={70} />
        </Logo>
        <StyledTabs
          value={props.tabval}
          variant="scrollable"
          textColor="primary"
          indicatorColor="primary"
          onChange={(_, value) => navigate(routers[value].link)}
        >
          {routers.map((tmp) => (
            <StyledTab
              hover={theme.palette.primary.main}
              key={tmp.link}
              label={tmp.name}
            />
          ))}
        </StyledTabs>
      </HeaderMain>
    </HeaderDiv>
  );
}
