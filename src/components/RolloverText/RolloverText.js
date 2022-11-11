import { Letter } from "../Letter";
import React from "react";

export function RolloverText({ text, classNames, fadeOutTime, primaryColor, colors }) {
  return (
    <div>
      <h1 className={classNames}>
        {text.split("").map((letter, index) => {
          return (
            <Letter
              key={index}
              fadeOutTime={fadeOutTime}
              primaryColor={primaryColor}
              colors={colors}
            >
              {letter}
            </Letter>
          );
        })}
      </h1>
    </div>
  );
}
