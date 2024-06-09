import React, { ReactElement, ReactNode, ReactPortal } from "react";
import { WithStyles, withStyles } from "@material-ui/core";

interface PanelProps extends WithStyles {
  headerText: string;
  children: ReactNode
}

const styles = {
  pannelWrapper: {
    backgroundColor: "white",
    padding: "10px"
  },
  panelHeader: {
    textAlign: "left" as const,
    marginLeft: "3%"
  },
  panelBody: {}
};

const PanelComponent = (props: PanelProps) => {
  const { classes, headerText, children } = props;

  return (
    <div className={classes.pannelWrapper}>
      <h1 className={classes.panelHeader}>{ headerText }</h1>
      <div className={classes.panelBody}>{ children }</div>
    </div>
  )
};

const Panel = withStyles(styles)(PanelComponent);

export { Panel }