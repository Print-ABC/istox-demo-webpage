import Head from "next/head";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Top from "./Top";
import About from "./About";
import Class from "./Class"
import Trainers from "./Trainers"
import Pricing from "./Pricing"
import Contact from "./Contact"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 0),
    "& > .MuiBox-root": {
      padding: theme.spacing(0, 20),
      [theme.breakpoints.up("lg")]:{
        padding: "0px 200px",
      },
    },
  },
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
    </div>
  );
}
