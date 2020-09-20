import { Button, Menu, MenuItem } from "@material-ui/core";
import { TranslateOutlined } from "@material-ui/icons";
import React from "react";

export default function LangSwitcher() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lang, setLang] = React.useState("中文");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleZh = () => {
    setAnchorEl(null);
    setLang("中文");
  };
  const handleEn = () => {
    setAnchorEl(null);
    setLang("English");
  };
  return (
    <>
      <Button
        color="primary"
        startIcon={<TranslateOutlined />}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {lang}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleZh}>中文</MenuItem>
        <MenuItem onClick={handleEn}>English</MenuItem>
      </Menu>
    </>
  );
}
