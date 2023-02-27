import {
  Navbar,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarRight,
} from "./Navbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Stack, Text } from "@chakra-ui/react";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <Navbar>
    <NavbarLogo>
      <Text as="span" fontWeight="semibold">
        Dashy
      </Text>
    </NavbarLogo>

    <NavbarLinks>
      <NavbarLink isActive href="#users">
        Users
      </NavbarLink>
      <NavbarLink href="#logs">Logs</NavbarLink>
      <NavbarLink href="#payments">Payments</NavbarLink>
      <NavbarLink href="#settings">Settings</NavbarLink>
    </NavbarLinks>

    <NavbarRight>
      <Stack direction="row">
        <Button size="sm" variant="outline">
          Logout
        </Button>
        <Button size="sm">Profile</Button>
      </Stack>
    </NavbarRight>
  </Navbar>
);

export const Example = Template.bind({});
