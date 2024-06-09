import React from "react";
import { withStyles, WithStyles } from "@material-ui/core";
import linkededInLogoImg from "../../images/linkedin_logo_small.png";
import githubLogoImg from "../../images/github_logo_small.png";
import stackOverflowLogoImg from "../../images/stackoverflow_logo.png";

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
    marginRight: "10px",
    height: "130px"
  },
  connectHeader: {
    paddingTop: "20px",
  },
  connectImg: {
    width: "100%",
    height: "300px"
  },
};

const ConnectSectionBase = (props: ConnectSectionProps) => {
  const { classes } = props; 
  
  return (
    <div className={classes.connectWrapper}>
      <a href="https://www.linkedin.com/in/wynn-blevins-93924594/">
        <img className={classes.socialMediaLogo} src={linkededInLogoImg} alt="LinkedIn Logo"></img>
      </a>
      <a href="https://github.com/wynnblevins">
        <img className={classes.socialMediaLogo} src={githubLogoImg} alt="Github Logo"></img>  
      </a>
      <a href="https://stackoverflow.com/users/1226768/wynn">
        <img className={classes.socialMediaLogo} src={stackOverflowLogoImg} alt="Stackoverflow Logo"></img>  
      </a>
    </div>
  );
};

const ConnectSection = withStyles(styles)(ConnectSectionBase);
export { ConnectSection };