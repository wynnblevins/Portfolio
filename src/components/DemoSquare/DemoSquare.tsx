import React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

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
    height: "200px",
    width: "200px",
    border: "2px solid #4aaaa5"
  },
  demoSquareImg: {
    height: "200px !important",
    width: "200px !important"
  },
  demoSquareA: {
    height: "200px",
    width: "200px",
    color: "white"
  },
  demoLabel: {
    position: "absolute" as const,
    width: "200px",
    backgroundColor: "#4aaaa5",
    marginTop: "10px"
  }
}

const DemoSquareBase = (props: Props) => {
  const { demo, classes } = props;
  
  return (
    <div className={classes.demoSquare} key={demo.url}>
      <a className={classes.demoSquareA} href={demo.url}>
        <p className={classes.demoLabel}>{demo.label}</p>
        <img alt={`${demo.label} application link`} 
          className={classes.demoSquareImg} 
          src={demo.image}></img>
      </a>
    </div>
  )
}

const DemoSquare = withStyles(styles)(DemoSquareBase);

export { DemoSquare };