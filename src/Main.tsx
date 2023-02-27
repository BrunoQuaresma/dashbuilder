import { Box } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";
import { SIDE_PADDING } from "./constants";

export type MainProps = ComponentProps<typeof Box>;

export const Main: FC<MainProps> = (boxProps) => {
  return <Box as="main" px={SIDE_PADDING} py={12} {...boxProps} />;
};
