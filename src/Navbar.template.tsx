import { Text, MenuItem } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";
import {
  Navbar,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarRight,
} from "./Navbar";
import { UserMenu } from "./UserMenu";

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
      <UserMenu
        avatarProps={{
          name: "Jane Doe",
          src: "https://i.pravatar.cc/150?img=2",
        }}
      >
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </UserMenu>
    </NavbarRight>
  </Navbar>
);
