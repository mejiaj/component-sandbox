// import { createButton } from "./Button";
import Button from "./button.html.twig";
import "./button.scss";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
