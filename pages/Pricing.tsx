import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, Divider, Typography } from "@material-ui/core";
import SwitchBtn from "./components/SwitchBtn";
import Plan from "./components/Plan";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 400,
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
  switchBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 45,
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
  planBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 100,
  },
}));

const plans = [
  {
    title: "Basic",
    description:
      "Sed ut perspiciatis unde natus error sit quae ab illo inventor",
    price: 340,
  },
  {
    title: "Professional",
    description:
      "Sed ut perspiciatis unde natus error sit quae ab illo inventor",
    price: 340,
  },
  {
    title: "Standard",
    description:
      "Sed ut perspiciatis unde natus error sit quae ab illo inventor",
    price: 340,
  },
];

const Pricing: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();

  const [switchState, setSwitchState] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchState(!switchState);
  };

  return (
    <Box id="pricing" className={classes.root}>
      <Box className={classes.description}>
        <h1>Our Pricing</h1>
        <Divider className={classes.divider} />
        <Typography>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
        <Box className={classes.switchBox}>
          <Typography style={{ fontWeight: !switchState ? 600 : 300 }}>
            Annual Plan
          </Typography>
          <SwitchBtn checked={switchState} onChange={handleChange} />
          <Typography style={{ fontWeight: switchState ? 600 : 300 }}>
            Monthly Plan
          </Typography>
        </Box>
      </Box>
      <Box className={classes.planBox}>
        {plans.map((plan) => (
          <Plan
            key={plan.title}
            title={plan.title}
            description={plan.description}
            price={plan.price}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
