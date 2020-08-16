import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles((theme) => ({
  contactForm: {
    width: 500,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 4,
    padding: theme.spacing(3, 6),
    "& > .MuiFormControlLabel-root > .MuiTypography-root": {
      fontWeight: 200,
    },
    "& > .MuiTextField-root": {
      marginTop: 20,
    },
    "& > .MuiButton-root": {
      width: 130,
      backgroundColor: "#F92524",
      color: theme.palette.common.white,
      fontWeight: 300,
      textTransform: "capitalize",
    },
  },
  checkboxBtn: {
    color: "#F92524",
  },
}));

const ContactForm = (props) => {
  const { checked, handleChange } = props;
  const classes = useStyles();

  return (
    <form className={classes.contactForm}>
      <h3>Send us your feedback</h3>
      <TextField label="Full Name" variant="outlined" color="secondary" />
      <TextField label="Phone No." variant="outlined" color="secondary" />
      <TextField
        label="Message"
        variant="outlined"
        color="secondary"
        multiline
        rows={5}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="agree"
            className={classes.checkboxBtn}
          />
        }
        label="I agree with all conditions"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
