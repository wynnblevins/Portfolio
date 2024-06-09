import React from "react";
import { withStyles, WithStyles } from "@material-ui/core";
import profilePic from "../../images/profile-pic-150x150.png"

interface MainSectionProps extends WithStyles {};

const styles = {
  mainWrapper: {
    height: "100%",
    backgroundColor: "white"
  }, 
  bioText: {
    lineHeight: "2.0",
    textAlign: "left" as const,
    margin: "3%"
  },
  aboutHeader: {
    paddingTop: "3%",
    textAlign: "left" as const,
    margin: "3%"
  },
  profilePic: {
    float: "left" as const,
    marginRight: "3%",
    marginLeft: "3%"
  }
};

const MainSectionBase = (props: MainSectionProps) => {
  const { classes } = props; 
  
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.aboutHeader}>About</h1>
      <div>
        <img className={classes.profilePic} src={profilePic} alt="picture of Wynn Blevins"></img>
        <p className={classes.bioText}>Robert (Wynn) Blevins is a software developer from Lynchburg Virginia. After graduating from Lynchburg College, 
          Wynn went to work for the Las Vegas based company TRAX International, then later moved to Alexandria Virginia to work for 
          Terathink (formerly called Dominion Consulting). After relocating from Northern Virginia to attend the University of Richmond's 
          Full Stack Developer Bootcamp, he found employment as a full stack developer in Richmond where he remained for five and a half years. 
          In his spare time, Wynn enjoys playing his guitar and building various electronics projects. Wynn currently resides in Midlothian, Virginia 
          with his wife Holly and their two cats Breeze and Wobbles.</p>
      </div>
      <p className={classes.bioText}>If you're interested in hiring Wynn, please feel free to download a copy of his resume using the link below.</p>
    </div>
  );
};

const MainSection = withStyles(styles)(MainSectionBase);
export { MainSection };