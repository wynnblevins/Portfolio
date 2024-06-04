import React from 'react';
import fizzbuzzImg from '../images/fizzbuzz.jpg';
import { Demo, DemoSquare } from '../components/DemoSquare';

const Demos = () => {
  const examples: Demo[] = [
    {
      url: 'https://github.com/wynnblevins/FizzBuzz',
      label: 'FizzBuzz',
      image: fizzbuzzImg
    }
  ];
  
  return (
    <>
      {examples.map((example: Demo) => {
        return (
          <DemoSquare demo={example}></DemoSquare>
        );
      })}
    </>
  );
}

export { Demos };
