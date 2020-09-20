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
import { amber, blue, grey } from "@material-ui/core/colors";
import routers from "../routers";
import { navigate } from "gatsby";

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
  width: 160,
  height: 80,
  color: blue[400],
  backgroundColor: amber[100],
  borderRadius: "100% 100% 100% 100% / 0% 0% 40% 40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10000,
});

const Accordion = withStyles({
  root: {
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
    backgroundColor: "white",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
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
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
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

export default function MobileHeader(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { tabval } = props;
  return (
    <Accordion square expanded={expanded}>
      <AccordionSummary
        expandIcon={<SwitchBt>{expanded ? <Close /> : <Dehaze />}</SwitchBt>}
        IconButtonProps={{ onClick: () => setExpanded(!expanded) }}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Logo>
          <LogoSvg fill={blue[500]} width={160} height={60} />
        </Logo>
      </AccordionSummary>
      <AccordionDetails>
        <NavBox>
          {routers.map((a, idx) => (
            <DisableFocusBt
              color={tabval === idx ? "primary" : "default"}
              onClick={() => {
                navigate(a.link);
                setExpanded(false);
              }}
              key={a.link}
            >
              {a.name}
            </DisableFocusBt>
          ))}
        </NavBox>
      </AccordionDetails>
    </Accordion>
  );
}
