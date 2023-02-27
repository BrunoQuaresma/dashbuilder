import { Avatar, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type UserMenuProps = {
  avatarProps: ComponentProps<typeof Avatar>;
  children: ComponentProps<typeof MenuList>["children"];
};

export const UserMenu: FC<UserMenuProps> = ({ avatarProps, children }) => {
  return (
    <Menu placement="bottom-end">
      <MenuButton>
        <Avatar size="sm" {...avatarProps} />
      </MenuButton>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};
