import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Divider, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ScheduleCard from "./components/ScheduleCard";

const useStyles = makeStyles((theme) => ({
  divider: {
    width: 100,
    border: "5px solid #F92524",
    opacity: 1,
    marginTop: 10,
  },
  tabs: {
    "& .MuiTabs-fixed > .MuiTabs-flexContainer": {
      "& > .MuiTab-root": {
        minWidth: 0,
        textTransform: "capitalize",
      },
      "& > .MuiTab-textColorSecondary": {
        color: theme.palette.common.black,
      },
      "& > .Mui-selected": {
        color: "#F92524",
      },
    },
  },
  cardBox: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 100,
  },
}));

const schedules = [
  {
    image: "/class/class_one.png",
    alt: "Class one",
    title: "Body Building",
    timing: "Mon-Fri | 9.00 - 10.00",
  },
  {
    image: "/class/class_two.png",
    alt: "Class two",
    title: "Body Building",
    timing: "Mon-Fri | 9.00 - 10.00",
  },
  {
    image: "/class/class_three.png",
    alt: "Class three",
    title: "Body Building",
    timing: "Mon-Fri | 9.00 - 10.00",
  },
  {
    image: "/class/class_four.png",
    alt: "Class four",
    title: "Body Building",
    timing: "Mon-Fri | 9.00 - 10.00",
  },
];

const Class: React.FC = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box id="classes">
      <Grid container>
        <Grid item xs={12} md={9}>
          <h1>Our Classes</h1>
          <Divider className={classes.divider} />
          <Typography style={{ color: "#7A839E" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleChange}
            className={classes.tabs}
          >
            <Tab label="All" />
            <Tab label="Mens" />
            <Tab label="Womens" />
          </Tabs>
        </Grid>
      </Grid>
      <Box className={classes.cardBox}>
        {schedules.map((schedule) => (
            <ScheduleCard
            imgSrc={schedule.image}
            imgTitle={schedule.alt}
            title={schedule.title}
            timing={schedule.timing}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Class;
