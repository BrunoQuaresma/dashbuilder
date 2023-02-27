import { HeaderTemplate } from "./Header.template";
import { Navbar } from "./Navbar";
import { NavbarTemplate } from "./Navbar.template";

export default {
  component: Navbar,
  title: "Pages/Dashboard",
};

const Template = () => (
  <>
    <NavbarTemplate />
    <HeaderTemplate />
  </>
);

export const Example = Template.bind({});
