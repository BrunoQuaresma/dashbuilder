import { ComponentStory } from "@storybook/react";
import { PasswordField } from "./PasswordField";

export default {
  component: PasswordField,
  title: "Components/PasswordField",
};

const Template: ComponentStory<typeof PasswordField> = (args) => (
  <PasswordField {...args} />
);

export const Example = Template.bind({});
