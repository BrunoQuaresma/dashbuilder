import { Stack, Button, Text } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";
import {
  Navbar,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarRight,
} from "./Navbar";

export const NavbarTemplate: ComponentStory<typeof Navbar> = () => (
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
