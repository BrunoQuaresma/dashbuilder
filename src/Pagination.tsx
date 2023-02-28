import { Box, Button } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export type PaginationProps = ComponentProps<typeof Box>;

export const Pagination = (boxProps: PaginationProps) => {
  return <Box display="flex" gap={2} {...boxProps} />;
};

export type PreviousButtonProps = ComponentProps<typeof Button>;

export const PreviousButton = (buttonProps: PreviousButtonProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      leftIcon={<FiArrowLeft />}
      children="Previous"
      w={32}
      {...buttonProps}
    />
  );
};

export type NextButtonProps = ComponentProps<typeof Button>;

export const NextButton = (buttonProps: NextButtonProps) => {
  return (
    <Button
      w={32}
      variant="outline"
      size="sm"
      rightIcon={<FiArrowRight />}
      children="Next"
      {...buttonProps}
    />
  );
};
