import { Box, Breadcrumb, Heading, Text } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";
import { SIDE_PADDING } from "./constants";

export type HeaderProps = ComponentProps<typeof Box>;

export const Header: FC<HeaderProps> = ({ children, ...boxProps }) => {
  return (
    <Box
      py={10}
      as="header"
      display="flex"
      alignItems="center"
      borderBottomWidth={1}
      borderColor="gray.200"
      flexWrap="wrap"
      px={SIDE_PADDING}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export type HeaderGroupProps = ComponentProps<typeof Box>;

export const HeaderGroup: FC<HeaderGroupProps> = (boxProps) => {
  return <Box display="flex" flexDir="column" gap={1} {...boxProps} />;
};

export type HeaderTitleProps = ComponentProps<typeof Heading>;

export const HeaderTitle: FC<HeaderTitleProps> = (headingProps) => {
  return (
    <Heading
      as="h1"
      display="flex"
      alignItems="center"
      gap={3}
      fontSize="3xl"
      fontWeight="medium"
      {...headingProps}
    />
  );
};

export type HeaderSubtitleProps = ComponentProps<typeof Text>;

export const HeaderSubtitle: FC<HeaderSubtitleProps> = (textProps) => {
  return <Text as="span" fontSize="md" color="gray.600" {...textProps} />;
};

export type HeaderRightProps = ComponentProps<typeof Box>;

export const HeaderRight: FC<HeaderRightProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <Box as="section" display="flex" marginLeft="auto" gap={2} {...boxProps}>
      {children}
    </Box>
  );
};

export type HeaderBreadcrumbProps = ComponentProps<typeof Breadcrumb>;

export const HeaderBreadcrumb: FC<HeaderBreadcrumbProps> = (
  breadcrumbProps
) => {
  return (
    <Breadcrumb
      spacing={2}
      separator={
        <Text as="span" fontSize="2xs" color="gray.300">
          /
        </Text>
      }
      fontSize="xs"
      color="gray.700"
      {...breadcrumbProps}
    />
  );
};
