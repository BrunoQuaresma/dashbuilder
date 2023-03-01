import {
  Box,
  chakra,
  ChakraComponent,
  Container,
  Text,
} from "@chakra-ui/react";
import { ComponentProps, FC, PropsWithChildren } from "react";

export type FormProps = {
  containerProps?: ComponentProps<typeof Container>;
  formProps?: ChakraComponent<"form", {}>;
};

export const Form: FC<PropsWithChildren<FormProps>> = ({
  children,
  containerProps,
  formProps,
}) => {
  return (
    <Container maxW="lg" {...containerProps}>
      <chakra.form {...formProps}>{children}</chakra.form>
    </Container>
  );
};

export type FormFieldsProps = ComponentProps<typeof Box>;

export const FormFields: FC<FormFieldsProps> = (boxProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      mt={8}
      __css={{ ":first-child": { mt: 0 } }}
      {...boxProps}
    />
  );
};

export type FormSectionProps = PropsWithChildren<
  Omit<ChakraComponent<"fieldset", {}>, "children">
>;

export const FormSection: FC<FormSectionProps> = (fieldsetProps) => {
  return (
    <chakra.fieldset
      mt={12}
      __css={{ ":first-child": { mt: 0 } }}
      {...fieldsetProps}
    />
  );
};

export type FormSectionTitleProps = ComponentProps<typeof chakra.legend>;

export const FormSectionTitle: FC<FormSectionTitleProps> = (legendProps) => {
  return <chakra.legend fontWeight="medium" fontSize="xl" {...legendProps} />;
};

export type FormSectionDescriptionProps = ComponentProps<typeof Text>;

export const FormSectionDescription: FC<FormSectionDescriptionProps> = (
  textProps
) => {
  return <Text fontSize="md" color="gray.600" {...textProps} />;
};
