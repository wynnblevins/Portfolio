import React from "react";
import { withStyles, WithStyles } from "@material-ui/core";
import linkededInLogoImg from "../../images/linkedin_logo_small.png";
import githubLogoImg from "../../images/github_logo_small.png";
import stackOverflowLogoImg from "../../images/stackoverflow_logo_small.png";

interface ConnectSectionProps extends WithStyles {};

const styles = {
  connectWrapper: {
    height: "100%",
    backgroundColor: "white"
  }, 
  socialMediaLogo: {
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  connectHeader: {
    paddingTop: "20px",
  }
};

const ConnectSectionBase = (props: ConnectSectionProps) => {
  const { classes } = props; 
  
  return (
    <div className={classes.connectWrapper}>
      <h1 className={classes.connectHeader}>Connect With Me</h1>
      <img className={classes.socialMediaLogo} src={linkededInLogoImg} alt="LinkedIn Logo"></img>
      <img className={classes.socialMediaLogo} src={githubLogoImg} alt="Github Logo"></img>
      <img className={classes.socialMediaLogo} src={stackOverflowLogoImg} alt="Stackoverflow Logo"></img>
    </div>
  );
};

const ConnectSection = withStyles(styles)(ConnectSectionBase);
export { ConnectSection };