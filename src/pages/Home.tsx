import React from 'react';
import { WithStyles, withStyles, Grid, Container } from '@material-ui/core';
import { ConnectSection, MainSection } from '../components'

const styles = {
  homeContainer: {
    height: "100%",
  },
  mainSection: {
    height: "100%",
    marginLeft: "10%"
  },
  connectSection: {
    height: "100%",
    marginRight: "20%"
  }
}

interface HomeProps extends WithStyles {}

const HomeComponent = (props: HomeProps) => {
  const { classes } = props;
  
  return (
    <Grid container className={classes.homeContainer} spacing={6}>
      <Grid item xs={12} sm={8}>
        <div className={classes.mainSection}>
          <MainSection></MainSection>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.connectSection}>
          <ConnectSection></ConnectSection>
        </div>
      </Grid>
    </Grid>
  );
}

const Home = withStyles(styles)(HomeComponent);
export { Home };
