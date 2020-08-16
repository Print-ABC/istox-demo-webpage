import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, ButtonBase, Typography, AppBar, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
}));

const Navbar = (props) => {};

const Layout: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Box>
      <Box>
        buttons
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
