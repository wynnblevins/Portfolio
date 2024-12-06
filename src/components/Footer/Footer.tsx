import React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

interface FooterProps extends WithStyles {}

const styles = {
  footer: {
    marginTop: "auto",
    color: "white",
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
    <footer className={classes.footer}>© 2024 - Robert W. Blevins</footer>
  )
};

const Footer = withStyles(styles)(FooterComponent);
export { Footer };

