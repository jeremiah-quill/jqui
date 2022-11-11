import React from "react";

import { GradientText } from "../components/GradientText";
import "/gradient-text.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/GradientText",
  component: GradientText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fromColor: { control: "color" },
    toColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GradientText {...args}>Hello World!</GradientText>;

export const GradientText = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // label: "Button",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
