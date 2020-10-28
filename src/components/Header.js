import React from "react";
import { Box, Tabs, Tab, useTheme, withStyles, styled } from "@material-ui/core";
import { ReactComponent as LogoSvg } from "../assets/logo-single.svg";
import { blue, grey } from "@material-ui/core/colors";
import routers from "../routers";
import { navigate } from "gatsby";
import LangSwitcher from "./LangSwitcher";

const HeaderDiv = styled(Box)({
  "@media (max-width: 900px)": {
    display: "none",
  },
  width: "100%",
  height: 64,
  display: "flex",
  position: "fixed",
  top: 0,
  zIndex: 1,
  justifyContent: "center",
  transition: "all .3s ease-in-out 0s",
  backgroundColor: (props) => (props.alpha ? "transparent" : "white"),
  boxShadow: (props) =>
    props.alpha
      ? "unset"
      : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
});

const HeaderMain = styled(Box)({
  maxWidth: 1280,
  width: "100%",
  display: "flex",
  height: 64,
  justifyContent: "center",
});

const Logo = styled(Box)({
  width: 160,
  height: 80,
  transition: "all .3s ease-in-out 0s",
  backgroundColor: (props) => (props.alpha ? "transparent" : blue[400]),
  borderRadius: "100% 100% 100% 100% / 0% 0% 40% 40%",
  margin: "0 48px",
  "&:hover": {
    cursor: "pointer",
  },
  zIndex: 10000,
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
  root: {
    marginRight: 48,
  },
})((props) => <Tabs {...props} />);

const LangBox = styled(Box)({
  display: "flex",
  flexDirection: "row-reverse",
  marginRight: 48,
  flexGrow: 1,
  flexShrink: 0,
});

export default function Header({ tabval }) {
  const theme = useTheme();
  const [alpha, setAlpha] = React.useState(null);
  const [preTabval, setPreTabval] = React.useState(null);

  const memoizedCallback = React.useCallback(() => {
    if (window === undefined)
      return;
    if (window.scrollY > 5) {
      setAlpha(0);
    } else {
      setAlpha(1);
    }
  }, []);

  React.useEffect(() => {
    if (window === undefined)
      return;
    if (!tabval) {
      window.addEventListener("scroll", memoizedCallback);
    } else {
      window.removeEventListener("scroll", memoizedCallback);
    }
  }, [tabval, memoizedCallback]);

  if (tabval !== preTabval) {
    setPreTabval(tabval);
    setAlpha(tabval ? 0 : 1);
  }
  return (
    <HeaderDiv alpha={alpha}>
      <HeaderMain>
        <Logo alpha={alpha} onClick={() => navigate("/")}>
          <LogoSvg
            style={{ transition: "all .3s ease-in-out 0s" }}
            fill={alpha ? blue[400] : "white"}
            width={160}
            height={70}
          />
        </Logo>
        <StyledTabs
          value={!tabval ? false : tabval - 1}
          variant='scrollable'
          textColor='primary'
          indicatorColor='primary'
          onChange={(_, value) => navigate(routers[value].link)}>
          {routers.map((tmp) => (
            <StyledTab hover={theme.palette.primary.main} key={tmp.link} label={tmp.name} />
          ))}
        </StyledTabs>
        <LangBox>
          <LangSwitcher />
        </LangBox>
      </HeaderMain>
    </HeaderDiv>
  );
}
