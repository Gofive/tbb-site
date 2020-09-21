import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  IconButton,
  withStyles,
  styled,
  Box,
  Button,
} from "@material-ui/core";
import { ReactComponent as LogoSvg } from "../assets/logo-single.svg";
import { Close, Dehaze } from "@material-ui/icons";
import { blue, grey } from "@material-ui/core/colors";
import routers from "../routers";
import { navigate } from "gatsby";
import LangSwitcher from "./LangSwitcher";

const MobileBox = styled(Box)({
  "@media (min-width: 900px)": {
    display: "none",
  },
  position: "fixed",
  top: 0,
  zIndex: 1,
  width: "100%",
});

const SwitchBt = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
})((props) => <IconButton {...props} />);

const DisableFocusBt = withStyles({
  root: {
    "&:hover": {
      backgroundColor: blue[100],
    },
    color: grey[800],
    borderRadius: 0,
  },
  textPrimary: {
    color: blue[400],
  },
})((props) => <Button {...props} />);

const Logo = styled(Box)({
  width: 140,
  height: 80,
  backgroundColor: (props) => (props.alpha ? "transparent" : blue[400]),
  borderRadius: "100% 100% 100% 100% / 0% 0% 40% 40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10000,
});

const Accordion = withStyles({
  root: {
    backgroundColor: (props) => (props.alpha ? "transparent" : "white"),
    "&:hover": {
      cursor: "default !important",
    },
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
    boxShadow: "unset",
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: (props) => (props.alpha ? "transparent" : "white"),
    boxShadow: (props) =>
      props.alpha
        ? "none"
        : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    height: 64,
    "&$expanded": {
      height: 64,
    },
    "&:hover": {
      cursor: "default !important",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
    justifyContent: "space-between",
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: 0,
    transition: "unset",
  },
}))(MuiAccordionDetails);

const NavBox = styled(Box)({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  "& button": {
    padding: "12px 0",
    "& span": {
      fontWeight: 500,
      fontSize: "1.2rem",
    },
  },
});

const LangBox = styled(Box)({
  display: "flex",
  flexDirection: "row-reverse",
  flexGrow: 1,
  flexShrink: 0,
});

export default function MobileHeader({ tabval }) {
  const [alpha, setAlpha] = React.useState(null);
  const [preTabval, setPreTabval] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const memoizedCallback = React.useCallback(() => {
    if (window.scrollY > 5) {
      setAlpha(0);
    } else {
      setAlpha(1);
    }
  }, []);

  React.useEffect(() => {
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
    <MobileBox>
      <Accordion alpha={alpha} square expanded={expanded}>
        <AccordionSummary
          alpha={alpha}
          expandIcon={<SwitchBt>{expanded ? <Close /> : <Dehaze />}</SwitchBt>}
          IconButtonProps={{ onClick: () => setExpanded(!expanded) }}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Logo alpha={alpha} onClick={() => navigate("/")}>
            <LogoSvg fill={alpha ? blue[400] : "white"} width={140} height={60} />
          </Logo>
          <LangBox>
            <LangSwitcher />
          </LangBox>
        </AccordionSummary>
        <AccordionDetails>
          <NavBox>
            {routers.map((a, idx) => (
              <DisableFocusBt
                color={tabval - 1 === idx ? "primary" : "default"}
                onClick={() => {
                  navigate(a.link);
                  setExpanded(false);
                }}
                key={a.link}>
                {a.name}
              </DisableFocusBt>
            ))}
          </NavBox>
        </AccordionDetails>
      </Accordion>
    </MobileBox>
  );
}
