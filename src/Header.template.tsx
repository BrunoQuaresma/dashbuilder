import { Button } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";
import {
  Header,
  HeaderGroup,
  HeaderTitle,
  HeaderSubtitle,
  HeaderRight,
} from "./Header";

export const HeaderTemplate: ComponentStory<typeof Header> = () => (
  <Header>
    <HeaderGroup>
      <HeaderTitle>Payments</HeaderTitle>
      <HeaderSubtitle>See all the payments</HeaderSubtitle>
    </HeaderGroup>

    <HeaderRight>
      <Button size="sm" variant="outline">
        Settings
      </Button>
      <Button size="sm" colorScheme="blue">
        Add payment
      </Button>
    </HeaderRight>
  </Header>
);
