import Head from "next/head";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Icon, Divider, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import RoomIcon from "@material-ui/icons/Room";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import Navbar from "./components/Navbar";
import Top from "./Top";
import About from "./About";
import Class from "./Class";
import Trainers from "./Trainers";
import Pricing from "./Pricing";
import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 0),
    "& > .MuiBox-root": {
      padding: theme.spacing(0, 20),
      [theme.breakpoints.up("lg")]: {
        padding: "0px 200px",
      },
    },
  },
  footer: {
    backgroundColor: "#F92524",
    color: theme.palette.common.white,
    marginTop: 200,
    "& > .MuiBox-root": {
      padding: theme.spacing(0, 20),
      [theme.breakpoints.up("lg")]: {
        padding: "0px 200px",
      },
      "& > .MuiDivider-root": {
        border: "1px solid #FFFFFF",
        opacity: 0.4,
      },
    },
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    "& > .MuiBox-root": {
      width: 500,
      margin: theme.spacing(5, 0)
    }
  },
  smIcons: {
    display: "flex",
    marginTop: 20,
    "& > *": {
      marginRight: 20,
    },
  },
  divider: {
    width: 100,
    border: "5px solid #FFFFFF",
    opacity: 1,
  },
  contactDetails: {
    "& > .MuiGrid-item > .MuiBox-root": {
      display: "flex",
      alignItems: "flex-start",
      "& > .MuiSvgIcon-root": {
        marginRight: 10
      }
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Power Body Training</title>
      </Head>
      <main className={classes.root}>
        <Navbar />
        <Top />
        <About />
        <Class />
        <Trainers />
        <Pricing />
        <Contact />
      </main>
      <footer className={classes.footer}>
        <Box>
          <Box className={classes.footerContent}>
            <Box>
              <img src="logo-white.png" alt="logo - white"/>
              <Typography>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, illo
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </Typography>
              <Box className={classes.smIcons}>
                <FacebookIcon />
                <TwitterIcon />
                <Icon>
                  <img src="google-plus-white.png" alt="google plus icon - white" />
                </Icon>
                <InstagramIcon />
              </Box>
            </Box>
            <Box>
              <h1>Get In Touch</h1>
              <Divider className={classes.divider} />
              <Grid container spacing={2} className={classes.contactDetails}>
                <Grid item xs={12} md={6}>
                  <h3>Address</h3>
                  <Box>
                    <RoomIcon />
                    <Typography>123 Madison Street New York City, NY 10001.</Typography>
                  </Box>
                  <Box>
                    <ScheduleIcon />
                    <Typography>Mon - Fri 08:00 AM - 09:00 PM</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <h3>Contact Info</h3>
                  <Box>
                    <EmailIcon />
                    <Typography>info@gym.com</Typography>
                  </Box>
                  <Box>
                    <PhoneInTalkIcon />
                    <Typography>+1 234 567 8901</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Divider />
          <Typography
            style={{
              fontWeight: 200,
              textAlign: "center",
              padding: "20px 0px",
            }}
          >
            Copyright &copy; 2019 GYM. All rights reserved.
          </Typography>
        </Box>
      </footer>
    </div>
  );
}
