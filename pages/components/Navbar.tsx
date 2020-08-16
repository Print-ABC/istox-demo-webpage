import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Button, ButtonBase, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "sticky",
    top: 0,
    width: "100%",
  },
  navbar: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1, 2)
  },
  btnBase: {
    height: 25,
    textAlign: "left",
    font: "Light 18px/27px Poppins",
    letterSpacing: 0.54,
    color: theme.palette.common.black,
    opacity: 1,
    marginRight: 50,
    "&:hover": {
      border: `2px solid ${theme.palette.grey[400]}`,
    },
  },
  contactBtn: {
    textAlign: "left",
    font: "Light 20px/30px Poppins",
    letterSpacing: 0.6,
    color: theme.palette.common.white,
    background: "#F92524 0% 0% no-repeat padding-box",
    borderRadius: 5,
    opacity: 1,
    padding: theme.spacing(1, 2),
  },
}));

const buttons = [
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "About Us",
    link: "#about",
  },
  {
    text: "Our Classes",
    link: "#classes",
  },
  {
    text: "Our Trainers",
    link: "#trainers",
  },
  {
    text: "Our Pricing",
    link: "#pricing",
  },
];

const NavBtn = (props) => {
  const { text, link } = props;
  const classes = useStyles();
  return (
    <ButtonBase className={classes.btnBase} href={link} focusRipple>
      <Typography>{text}</Typography>
    </ButtonBase>
  );
};

const ContactBtn = (props) => {
  const { text, link } = props;
  const classes = useStyles();
  return (
    <Button className={classes.contactBtn} href={link} focusRipple>
      {text}
    </Button>
  );
};

const Navbar: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.navbar}>
        {buttons.map((btn) => (
          <NavBtn key={btn.text} text={btn.text} link={btn.link} />
        ))}
        <ContactBtn text="Contact Us" link="#contact" />
      </Box>
    </Box>
  );
};

export default Navbar;
