import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, ButtonBase, Typography, AppBar, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
}));

// https://material-ui.com/components/buttons/#complex-buttons

const buttons = [
  {
    text: "Home",
    link: "/#home"
  },
  {
    text: "About Us",
    link: "/#about"
  },
  {
    text: "Our Classes",
    link: "/#classes"
  },
  {
    text: "Our Trainers",
    link: "/#trainers"
  },
  {
    text: "Our Pricing",
    link: "/#pricing"
  },
  {
    text: "Contact Us",
    link: "/#contact"
  },
]

const Navbar = (props) => {};

const Layout: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Box>
      <Box>
        buttons
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
