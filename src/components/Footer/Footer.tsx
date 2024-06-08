import { WithStyles, withStyles } from "@material-ui/core";
import React from "react";

interface FooterProps extends WithStyles {}

const styles = {
  footer: {
    marginTop: "auto",
    backgroundColor: "#4aaaa5",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    padding: "25px 0"
  }
}

const FooterComponent = (props: FooterProps) => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>Footer goes here</footer>
  )
};

const Footer = withStyles(styles)(FooterComponent);
export { Footer };

