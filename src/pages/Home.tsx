import React from 'react';
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { ConnectSection, MainSection } from '../components'
import { Panel } from '../components/Panel';

const styles = {
  homeContainer: {
    height: "100%",
    padding: "3%"
  },
  mainSection: {
    height: "100%",
    marginLeft: "10%"
  },
  connectSection: {
    height: "100%",
    marginRight: "5%"
  }
}

interface HomeProps extends WithStyles {}

const HomeComponent = (props: HomeProps) => {
  const { classes } = props;
  
  return (
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12} sm={8}>        
        <Panel headerText="About">
          <MainSection></MainSection>
        </Panel>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Panel headerText='Connect With Me'>
          <ConnectSection></ConnectSection>
        </Panel>
      </Grid>
    </Grid>
  );
}

const Home = withStyles(styles)(HomeComponent);
export { Home };
