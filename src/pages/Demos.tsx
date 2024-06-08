import React, { useEffect, useState } from 'react';
import { WithStyles, withStyles, Grid } from "@material-ui/core";
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
    width: "auto"
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
  
  const userIsOnMobile = (): boolean => {
    let check = false;
    // @ts-ignore
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

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
