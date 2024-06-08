import React from "react";
import { Container, WithStyles, withStyles } from "@material-ui/core";

const styles = {
  mainWrapper: {
    
  },
  innerBox: {
    
  }
}

interface MainSectionProps extends WithStyles {};

const MainSectionComponent = (props: MainSectionProps) => {
  const { classes } = props;

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.innerBox}>
        <h1>Main Section</h1>
      </div>
    </div>
  )
};

const MainSection = withStyles(styles)(MainSectionComponent);
export { MainSection };