import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";
import { FC, PropsWithChildren } from "react";
import {
  Form,
  FormActions,
  FormFields,
  FormSection,
  FormSectionDescription,
  FormSectionTitle,
} from "./Form";
import { Main } from "./Main";

export default {
  component: Form,
  title: "Components/Form",
};

const FormTemplate: ComponentStory<typeof Form> = (args) => (
  <Main>
    <Form {...args}>
      <FormSection>
        <FormSectionTitle>User info</FormSectionTitle>
        <FormSectionDescription>
          Enter the user details to verify the payment
        </FormSectionDescription>

        <FormFields>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input />
          </FormControl>
        </FormFields>
      </FormSection>

      <FormSection>
        <FormSectionTitle>Payment details</FormSectionTitle>
        <FormSectionDescription>
          Set the payment details below
        </FormSectionDescription>

        <FormFields>
          <FormControl isRequired>
            <FormLabel>Value</FormLabel>
            <Input />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Due date</FormLabel>
            <Input />
          </FormControl>
        </FormFields>
      </FormSection>

      <FormActions>
        <Button variant="outline">Cancel</Button>
        <Button colorScheme="blue">Add payment</Button>
      </FormActions>
    </Form>
  </Main>
);

export const VerticalForm = FormTemplate.bind({});
