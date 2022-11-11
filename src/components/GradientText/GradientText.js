import React from "react";
import "./gradient-text.css";

export function GradientText({
  children,
  classNames,
  style,
  fromColor = "black",
  toColor = "black",
  angle = "90",
}) {
  const styles = {
    ...style,
    backgroundImage: `linear-gradient(${angle}deg, ${fromColor}, ${toColor})`,
  };

  return (
    <span style={styles} className={`gradient-text ${classNames}`}>
      {children}
    </span>
  );
}
