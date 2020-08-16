import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Icon, Divider, Grid, Typography } from "@material-ui/core";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SecurityIcon from "@material-ui/icons/Security";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  storyBox: {
    "& > .MuiDivider-root": {
      width: 100,
      border: "5px solid #F92524",
      opacity: 1,
    },
    "& > .MuiTypography-root": {
      color: "#7A839E",
      marginBottom: 10,
    },
  },
  iconGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: "#FFFFFF",
    border: "2px solid #F92524",
    borderRadius: "50%",
    color: "#F92524",
    opacity: 1,
    padding: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 500,
    marginRight: 20,
    [theme.breakpoints.up("lg")]: {
      width: 450,
      height: 642,
    },
  },
}));

const features = [
  {
    header: "Open Door Policy",
    description:
      "Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.",
    icon: <DirectionsWalkIcon fontSize="large" />,
  },
  {
    header: "Fully Insured",
    description:
      "Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.",
    icon: <SecurityIcon fontSize="large" />,
  },
  {
    header: "Personal Trainer",
    description:
      "Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.",
    icon: <PersonOutlineIcon fontSize="large" />,
  },
];

const Feature = (props) => {
  const { children, header, description } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={2} className={classes.iconGrid}>
        <Icon className={classes.iconBox}>{children}</Icon>
      </Grid>
      <Grid item xs={12} md={10}>
        <h2 style={{ marginTop: 0 }}>{header}</h2>
        <Typography style={{ color: "#7A839E" }}>{description}</Typography>
      </Grid>
    </Grid>
  );
};

const About: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root} id="about">
      <Box style={{ height: "100%" }}>
        <img
          src="bg_preparing_run.png"
          alt="sprint pose"
          className={classes.image}
        />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.storyBox}>
          <h1>Our Story</h1>
          <Divider style={{ marginBottom: 20 }} />
          <Typography>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
          <Typography>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </Typography>
        </Box>
        <Box>
          {features.map((feature) => (
            <Feature
              key={feature.header}
              header={feature.header}
              description={feature.description}
            >
              {feature.icon}
            </Feature>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
