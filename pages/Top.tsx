import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Button, Container, Divider, Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: theme.spacing(8, 0),
  },
  content: {
    width: 520,
    float: "right",
    "& > .MuiTypography-root": {
      marginTop: 15,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 235,
    },
  },
  divider: {
    width: 100,
    border: "5px solid #F92524",
    opacity: 1,
    marginTop: 10,
  },
  joinBtn: {
    backgroundColor: "#F92524",
    color: theme.palette.common.white,
    fontWeight: 200,
    textTransform: "capitalize",
    marginTop: 20,
    padding: theme.spacing(1, 4),
  },
  image: {
    width: 350,
    height: 437,
    [theme.breakpoints.up("lg")]: {
      width: 450,
      height: 562,
    },
  },
}));

const Top: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" id="home" className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h4">Build Your Body &amp;</Typography>
        <Typography variant="h2" style={{ fontWeight: 600 }}>
          Shape Yourself!
        </Typography>
        <Divider className={classes.divider} />
        <Typography style={{ color: "#7A839E" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore architecto beatae vitae dicta sunt explicabo.
        </Typography>
        <Button endIcon={<ArrowRightAltIcon />} className={classes.joinBtn}>
          Join Today
        </Button>
      </Box>
      <img
        src="bg_gym_girl_bottle.png"
        alt="drinking water"
        className={classes.image}
      />
    </Container>
  );
};

export default Top;
