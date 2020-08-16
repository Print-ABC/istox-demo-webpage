import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Avatar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ContactForm from "./components/ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
  },
  description: {
    "& > .MuiTypography-root": {
      marginTop: 20,
    },
  },
  divider: {
    width: 100,
    border: "5px solid #F92524",
    opacity: 1,
    marginTop: 10,
  },
  formBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  testimony: {
    width: 430,
    boxShadow: "0px 1px 5px lightgrey",
    padding: theme.spacing(6, 6, 3),
    "& > .MuiAvatar-root": {
      width: 100,
      height: 100,
      position: "absolute",
      transform: "translate(0px, -100px)",
    },
    "& > .MuiRating-root": {
      margin: theme.spacing(3, 0),
    },
    "& > .MuiTypography-root": {
      color: "#7A839E",
      fontWeight: 300,
    },
  },
}));

const Testimony = (props) => {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.testimony}>
      <Avatar alt="avatar" src="avatar.png" />
      <Rating name="read-only" value={5} readOnly />
      <Typography>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aperiam, eaque ipsa.
      </Typography>
      <h4 style={{ marginBottom: 0 }}>Christopher Doe</h4>
      <Typography>Orlando, Floria</Typography>
    </Paper>
  );
};

const Contact: React.FC = (props) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  return (
    <Box id="contact" className={classes.root}>
      <Box className={classes.description}>
        <h1>What People Says About Us?</h1>
        <Divider className={classes.divider} />
        <Typography style={{ color: "#7A839E" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Typography>
      </Box>
      <Box className={classes.formBox}>
        <Testimony />
        <ContactForm checked={checked} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Contact;
