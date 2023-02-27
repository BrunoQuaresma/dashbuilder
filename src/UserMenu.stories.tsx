import { MenuItem } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserMenu } from "./UserMenu";

export default {
  component: UserMenu,
  title: "Components/UserMenu",
  argTypes: {
    avatarProps: {
      defaultValue: {
        name: "Jane Doe",
      },
    },
  },
} as ComponentMeta<typeof UserMenu>;

const UserMenuTemplate: ComponentStory<typeof UserMenu> = (args) => (
  <UserMenu {...args}>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </UserMenu>
);

export const WithName = UserMenuTemplate.bind({});

export const WithPicture = UserMenuTemplate.bind({});
WithPicture.args = {
  avatarProps: {
    name: "Jane Doe",
    src: "https://i.pravatar.cc/150?img=2",
  },
};
