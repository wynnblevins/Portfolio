import React from "react";

interface Props {
  demo: Demo
}

export interface Demo {
  url: string;
  label: string;
  image: string;
}

const DemoSquare = (props: Props) => {
  const { demo } = props;
  
  return (
    <div key={demo.url}>
      <p>{demo.label}</p>
      <img src={demo.image}></img>
    </div>
  )
}

export { DemoSquare };