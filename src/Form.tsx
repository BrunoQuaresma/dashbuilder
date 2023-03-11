import {
  Box,
  chakra,
  ChakraComponent,
  Container,
  Text,
} from "@chakra-ui/react";
import {
  ComponentProps,
  createContext,
  FC,
  HTMLProps,
  PropsWithChildren,
  useContext,
} from "react";

type FormContextValue = {
  direction: "horizontal" | "vertical";
};

const defaultFormContextValue: FormContextValue = {
  direction: "vertical",
};

const FormContext = createContext<FormContextValue>(defaultFormContextValue);

export type FormProps = ComponentProps<typeof Container> &
  HTMLProps<HTMLFormElement> & { direction?: FormContextValue["direction"] };

export const Form: FC<FormProps> = ({
  direction = "vertical",
  ...formProps
}) => {
  const maxW = direction === "vertical" ? "lg" : "4xl";

  return (
    <FormContext.Provider value={{ direction }}>
      <Container
        as="form"
        maxW={maxW}
        display="flex"
        flexDir="column"
        gap={12}
        {...formProps}
      />
    </FormContext.Provider>
  );
};

export type FormFieldsProps = ComponentProps<typeof Box>;

export const FormFields: FC<FormFieldsProps> = (boxProps) => {
  return (
    <Box
      w="full"
      display="flex"
      flexDirection="column"
      gap={4}
      __css={{ ":first-child": { mt: 0 } }}
      {...boxProps}
    />
  );
};

export type FormSectionProps = PropsWithChildren<
  Omit<ChakraComponent<"fieldset", {}>, "children">
>;

export const FormSection: FC<FormSectionProps> = (fieldsetProps) => {
  const { direction } = useContext(FormContext);
  return (
    <chakra.fieldset
      display="flex"
      flexDirection={direction === "vertical" ? "column" : "row"}
      gap={8}
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

export type FormSectionDetailsProps = ComponentProps<typeof Box>;

export const FormSectionDetails: FC<FormSectionDetailsProps> = (boxProps) => {
  return <Box w="full" {...boxProps} />;
};

export type FormActionsProps = ComponentProps<typeof Box>;

export const FormActions: FC<FormActionsProps> = (boxProps) => {
  return <Box display="flex" justifyContent="end" gap={2} {...boxProps} />;
};
