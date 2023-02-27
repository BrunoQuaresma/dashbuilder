import {
  Header,
  HeaderActions,
  HeaderGroup,
  HeaderSubtitle,
  HeaderTitle,
} from "./Header";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@chakra-ui/button";

export default {
  component: Header,
  title: "Components/Header",
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <Header>
    <HeaderGroup>
      <HeaderTitle>Payments</HeaderTitle>
      <HeaderSubtitle>See all the payments</HeaderSubtitle>
    </HeaderGroup>

    <HeaderActions>
      <Button size="sm">Settings</Button>
      <Button size="sm" colorScheme="blue">
        Add payment
      </Button>
    </HeaderActions>
  </Header>
);

export const Example = Template.bind({});
