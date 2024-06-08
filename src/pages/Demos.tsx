import React, { useEffect, useState } from 'react';
import { WithStyles, withStyles, Grid } from "@material-ui/core";
import { userIsOnMobile } from '../utils/mobileDetectionService';
import { Demo, DemoSquare } from '../components/DemoSquare';
import fizzbuzzImg from '../images/fizzbuzz.jpg';
import primeNumberImg from "../images/PrimeNumbers.jpg";
import fibonacciImg from "../images/Fibonacci.jpg";
import guitarImg from "../images/MemoryGame.jpg";
import triviaImg from "../images/trivia.png";
import hangmanImg from "../images/hangman.png";
import brainImg from "../images/brain-resized.png";
import starWarsImg from "../images/star_wars_logo_resized.png";
import giphyLogoImg from "../images/giphy_logo_resized.png";
import computerVisionImg from "../images/eye.jpg";

interface Props extends WithStyles {};

const styles = {
  demosContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    marginLeft: "15px",
    width: "auto",
    marginTop: "70px"
  },
  demoBox: {
    marginTop: "40px"
  }
}

const DemosBase = (props: Props) => {
  const { classes } = props;

  const [demos, setDemos] = useState<Demo[]>(
    [
      {
        url: 'https://github.com/wynnblevins/FizzBuzz',
        label: 'FizzBuzz',
        image: fizzbuzzImg
      },
      {
        url: 'https://github.com/wynnblevins/PrimeNumbers',
        label: 'Prime Numbers',
        image: primeNumberImg
      },
      {
        url: 'https://github.com/wynnblevins/Fibonacci',
        label: 'Fibonacci',
        image: fibonacciImg
      },
      {
        url: 'https://wynnblevins.github.io/react-clicky-game',
        label: 'Guitars Memory Game',
        image: guitarImg
      },
      {
        url: 'https://wynnblevins.github.io/trivia-blitz',
        label: 'Trivia Blitz',
        image: triviaImg
      },
      {
        url: 'https://wynnblevins.github.io/Hangman-Game/',
        label: 'Hangman',
        image: hangmanImg
      },
      {
        url: 'https://github.com/wynnblevins/LiriNodeApp',
        label: 'LIRI',
        image: brainImg
      },
      {
        url: 'https://wynnblevins.github.io/Star-Wars-Game',
        label: 'Star Wars RPG',
        image: starWarsImg
      },
      {
        url: 'https://wynnblevins.github.io/GiphyBrowser',
        label: 'Giphy Browser',
        image: giphyLogoImg
      }
    ]
  )

  useEffect(() => {
    // some apps don't work right on mobile, optionally displaying these apps
    if (!userIsOnMobile()) {
      const desktopOnlyApps = [
        {
          url: 'https://wynnblevins.github.io/object-detection',
          label: 'Object Detection',
          image: computerVisionImg
        }
      ];
      const demosWithDesktopOnlyApps = [...demos, ...desktopOnlyApps];
  
      setDemos(demosWithDesktopOnlyApps);
    }
  }, []);

  return (
    <Grid container className={classes.demosContainer} >
      {demos.map((example: Demo) => {
        return (
          <Grid xs={12} md={6} lg={4} className={classes.demoBox}>
            <DemoSquare demo={example}></DemoSquare>
          </Grid>
        );
      })}
    </Grid>
  );
}

const Demos = withStyles(styles)(DemosBase)
export { Demos };
