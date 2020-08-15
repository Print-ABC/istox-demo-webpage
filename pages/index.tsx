import Head from "next/head";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 0),
    "& > .MuiBox-root": {
      padding: theme.spacing(0, 20),
      [theme.breakpoints.up("lg")]:{
        padding: "0px 235px",
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
      </main>
    </div>
  );
}