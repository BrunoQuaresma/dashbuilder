import { Header } from "./Header";
import { ComponentMeta } from "@storybook/react";
import { HeaderTemplate } from "./Header.template";

export default {
  component: Header,
  title: "Components/Header",
} as ComponentMeta<typeof Header>;

export const Example = HeaderTemplate.bind({});
