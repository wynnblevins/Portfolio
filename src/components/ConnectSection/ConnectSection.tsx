import React from "react";
import { withStyles, WithStyles } from "@material-ui/core";

interface ConnectSectionProps extends WithStyles {};

const styles = {
  connectWrapper: {
    height: "100%"
  }
};

const ConnectSectionBase = (props: ConnectSectionProps) => {
  const { classes } = props; 
  
  return (
    <div className={classes.connectWrapper}>
      <h1>Connect w/Me</h1>
    </div>
  );
};

const ConnectSection = withStyles(styles)(ConnectSectionBase);
export { ConnectSection };