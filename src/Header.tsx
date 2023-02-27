import { Box, Heading, Text } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type HeaderProps = ComponentProps<typeof Box>;

export const Header: FC<HeaderProps> = ({ children, ...boxProps }) => {
  return (
    <Box as="header" display="flex" alignItems="center" {...boxProps}>
      {children}
    </Box>
  );
};

export type HeaderGroupProps = ComponentProps<typeof Box>;

export const HeaderGroup: FC<HeaderGroupProps> = (boxProps) => {
  return <Box as="hgroup" display="flex" flexDir="column" {...boxProps} />;
};

export type HeaderTitleProps = ComponentProps<typeof Heading>;

export const HeaderTitle: FC<HeaderTitleProps> = (headingProps) => {
  return (
    <Heading
      as="h1"
      display="flex"
      flexDir="column"
      fontSize="2xl"
      fontWeight="semibold"
      {...headingProps}
    />
  );
};

export type HeaderSubtitleProps = ComponentProps<typeof Text>;

export const HeaderSubtitle: FC<HeaderSubtitleProps> = (textProps) => {
  return <Text as="span" fontSize="lg" color="gray.500" {...textProps} />;
};

export type HeaderActionsProps = ComponentProps<typeof Box>;

export const HeaderActions: FC<HeaderActionsProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <Box as="section" display="flex" marginLeft="auto" gap={2} {...boxProps}>
      {children}
    </Box>
  );
};
