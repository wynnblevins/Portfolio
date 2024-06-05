import React from "react";
import { WithStyles, createStyles, withStyles } from "@material-ui/core";

interface Props extends WithStyles {
  demo: Demo
}

export interface Demo {
  url: string;
  label: string;
  image: string;
}

const styles = {
  demoSquare: {
    height: "320px",
    width: "300px"
  },
  demoSquareImg: {
    height: "300px !important",
    width: "300px !important"
  },
  demoSquareA: {
    height: "300px",
    width: "300px"
  }
}

const DemoSquareBase = (props: Props) => {
  const { demo, classes } = props;
  
  return (
    <div className={classes.demoSquare} key={demo.url}>
      <a className={classes.demoSquareA} href={demo.url}>
        <p>{demo.label}</p>
        <img className={classes.demoSquareImg} src={demo.image}></img>
      </a>
    </div>
  )
}

const DemoSquare = withStyles(styles)(DemoSquareBase);

export { DemoSquare };