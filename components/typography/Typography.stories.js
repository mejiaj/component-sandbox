import Typography from "./typography.html.twig";

export default {
  title: "Components/Typography",
  tags: ["autodocs"],
  component: Typography,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  }
};

export const Default = {};
