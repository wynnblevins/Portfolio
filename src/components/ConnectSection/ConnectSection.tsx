import React from "react";
import { Grid, withStyles, WithStyles } from "@material-ui/core";
import linkededInLogoImg from "../../images/linkedin_logo_small.png";
import githubLogoImg from "../../images/github_logo_small.png";
import stackOverflowLogoImg from "../../images/stackoverflow_logo.png";
import hackerRankLogo from "../../images/hackerrank-logo.png";

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
    height: "100px"
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
    <Grid container className={classes.connectWrapper}>
      <Grid item xs={12} sm={12} md={6} xl={3}>
        <a href="https://www.linkedin.com/in/wynn-blevins-93924594/">
          <img className={classes.socialMediaLogo} src={linkededInLogoImg} alt="LinkedIn Logo"></img>
        </a>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={3}>
        <a href="https://github.com/wynnblevins">
          <img className={classes.socialMediaLogo} src={githubLogoImg} alt="Github Logo"></img>  
        </a>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={3}>
        <a href="https://stackoverflow.com/users/1226768/wynn">
          <img className={classes.socialMediaLogo} src={stackOverflowLogoImg} alt="Stackoverflow Logo"></img>  
        </a>
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={3}>
        <a href="https://www.hackerrank.com/profile/wynnblevins">
          <img className={classes.socialMediaLogo} src={hackerRankLogo} alt="HackerRank Logo"></img>  
        </a>
      </Grid>
    </Grid>
  );
};

const ConnectSection = withStyles(styles)(ConnectSectionBase);
export { ConnectSection };