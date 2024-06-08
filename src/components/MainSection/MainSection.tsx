import React from "react";
import { Container, WithStyles, withStyles } from "@material-ui/core";

const styles = {
  mainWrapper: {
    height: "100%",
    paddingTop: "20%",
    paddingLeft: "10%",
    paddingRight: "10%"
  }
}

interface MainSectionProps extends WithStyles {};

const MainSectionComponent = (props: MainSectionProps) => {
  const { classes } = props;

  return (
    <div className={classes.mainWrapper}>
      <h1>Main Section</h1>
    </div>
  )
};

const MainSection = withStyles(styles)(MainSectionComponent);
export { MainSection };