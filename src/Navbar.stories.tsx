import { Navbar } from "./Navbar";
import { ComponentMeta } from "@storybook/react";
import { NavbarTemplate } from "./Navbar.template";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as ComponentMeta<typeof Navbar>;

export const Example = NavbarTemplate.bind({});
