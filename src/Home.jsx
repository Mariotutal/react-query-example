import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2">React Query Example</Typography>
      <section className={classes.main}>
        <Typography variant="body1">
          Check out the{" "}
          <Link component={RouterLink} to="/episodes">
            Episodes
          </Link>{" "}
          and{" "}
          <Link component={RouterLink} to="/characters">
            Characters
          </Link>
          !
        </Typography>
      </section>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  main: {
    margin: "44px 0",
    "& p": {
      margin: "12px 0 24px",
    },
  },
}));
