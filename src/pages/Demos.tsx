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
import todoListImg from '../images/ToDoList.png';
import opAmpImg from "../images/non-inverting-amplifier.png";
import { Panel } from '../components/Panel';

interface Props extends WithStyles {};

const styles = {
  demosContainer: {
    margin: "3%",
    paddingRight: "3%"
  },
  innerDemosContainer: {
    paddingBottom: "20px",
    paddingLeft: "70px"
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
      },
      {
        url: 'https://next-todos-c3ewwnhw9-wynn-blevins-projects.vercel.app/',
        label: 'To Do List',
        image: todoListImg
      },
      {
        url: 'https://wynnblevins.github.io/op-amp-calculator',
        label: 'Op Amp Calculator',
        image: opAmpImg
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
    <div className={classes.demosContainer}>
      <Panel headerText="Demos">
        <Grid container className={classes.innerDemosContainer}>
          {demos.map((example: Demo) => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3} className={classes.demoBox}>
                <DemoSquare demo={example}></DemoSquare>
              </Grid>
            );
          })}
        </Grid>
      </Panel>
    </div>
  );
}

const Demos = withStyles(styles)(DemosBase)
export { Demos };
