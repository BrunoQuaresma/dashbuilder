import { Tr } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type ClickableRowProps = ComponentProps<typeof Tr>;

export const ClickableRow: FC<ClickableRowProps> = (trProps) => {
  return (
    <Tr
      cursor="pointer"
      role="banner"
      tabIndex={0}
      outlineOffset={-1}
      _hover={{ bg: "gray.50" }}
      {...trProps}
    />
  );
};
