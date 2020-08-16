import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    borderRadius: 5,
    "&:hover": {
      boxShadow: "0px 10px 20px #EEA1A1C2",
      transform: "translate(0px, -40px)",
    },
    "& > .MuiCardActionArea-root": {
      "& > .MuiCardMedia-root": {
        width: "100%",
        height: 250,
      },
      "& > .MuiCardContent-root": {
        backgroundColor: "#F92524",
        color: theme.palette.common.white,
      },
    },
  },
}));

const ScheduleCard = (props) => {
  const classes = useStyles();
  const { imgSrc, imgTitle, title, timing } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia image={imgSrc} title={imgTitle} />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography variant="caption">
            <ScheduleIcon fontSize="inherit" /> {timing}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ScheduleCard;
