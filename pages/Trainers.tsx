import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Grid, Divider, Typography, Icon } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 200,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "& > .MuiTypography-root": {
      color: "#7A839E",
      marginTop: 20,
    },
  },
  divider: {
    width: 100,
    border: "5px solid #F92524",
    opacity: 1,
  },
  image: {
    width: 300,
    height: 300,
  },
  trainerCard: {
    width: 300,
    height: 300,
    display: "flex",
    alignItems: "center",
    "& .MuiTypography-root": {
      color: "#7A839E",
      fontWeight: 300,
      marginTop: 10,
      "&:first-child": {
        color: "#F92524",
        fontWeight: 600,
        marginTop: 0
      },
    },
  },
  smIcons: {
    display: "flex",
    marginTop: 20,
    "& > *": {
      marginRight: 20,
    },
  },
}));

const TrainerCard = (props) => {
  const { name, position, description } = props;
  const classes = useStyles();
  return (
    <Box className={classes.trainerCard}>
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography>{position}</Typography>
        <Divider />
        <Typography>{description}</Typography>
        <Box className={classes.smIcons}>
          <FacebookIcon />
          <TwitterIcon />
          <Icon>
            <img src="google-plus.png" alt="google plus icon" />
          </Icon>
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
};

const Trainers: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Box id="trainers" className={classes.root}>
      <Box className={classes.description}>
        <h1>Our Trainers</h1>
        <Divider className={classes.divider} />
        <Typography>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
      </Box>
      <Grid container style={{ marginTop: 100 }}>
        <Grid item xs={12} md={4}>
          <img src="/trainers/ilona_jeklin.png" alt="Ilona Jeklin" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TrainerCard
            name="AMARYAN JACKSON"
            position="Body Builder"
            description="Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="/trainers/john_doe.png" alt="John Doe" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TrainerCard
            name="ILONA JEKLIN"
            position="Body Builder"
            description="Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="/trainers/amaryan_jackson.png" alt="Amaryan Jackson" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TrainerCard
            name="John Doe"
            position="Body Builder"
            description="Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trainers;
