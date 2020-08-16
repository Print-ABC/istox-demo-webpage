import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Button, Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  plan: {
    width: 300,
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid #CCCCCC",
    borderRadius: "10px",
    opacity: 1,
    padding: theme.spacing(0, 3),
    "&:hover": {
      border: "3px solid #F92524",
      "& > .MuiButtonBase-root": {
        backgroundColor: "#F92524",
        color: theme.palette.common.white,
      },
      "& > .MuiButton-outlined": {
        border: "none"
      }
    },
    "& > img": {
      width: 120,
      height: 120
    },
    "& > .MuiDivider-root": {
      width: 220,
      border: "1px solid #707070",
      opacity: 0.3,
      margin: theme.spacing(2, 0)
    },
    "& > .MuiButton-root": {
      textTransform: "capitalize",
      marginTop: 40,
      fontWeight: 300
    }
  },
}));

const Plan = (props) => {
  const { title, description, price } = props;
  const classes = useStyles();
  return (
    <Box className={classes.plan}>
      <img src="dumbbell.svg" alt="dumbbell" />
      <h3>{title} Plan</h3>
      <Typography style={{ color: "#7A839E", fontWeight: 300 }}>{description}</Typography>
      <Divider />
      <h3>${price}/Month</h3>
      <Button variant="outlined">Get Started</Button>
    </Box>
  );
};

export default Plan;
