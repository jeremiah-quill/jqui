import React from "react";
import { storiesOf } from "@storybook/react";

import { GradientText } from "../components/GradientText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "GradientText",
//   component: GradientText,
//   argTypes: {
//     fromColor: { control: "color" },
//     toColor: { control: "color" },
//   },
// };

const stories = storiesOf("GradientText", module);

stories.add("GradientText", () => (
  <GradientText
    fromColor={"#7766e8"}
    toColor={"#de62a4"}
    style={{ fontSize: "64px", fontWeight: "bold", fontFamily: "sans-serif" }}
    // text="Hello World"
  >
    Hello World
  </GradientText>
));
