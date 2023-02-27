import { Box, Link } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";
import { SIDE_PADDING } from "./constants";

export type NavbarProps = ComponentProps<typeof Box>;

export const Navbar: FC<NavbarProps> = (boxProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={10}
      px={SIDE_PADDING}
      h={16}
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      {...boxProps}
    />
  );
};

export type NavbarLogoProps = ComponentProps<typeof Box>;

export const NavbarLogo: FC<NavbarLogoProps> = (boxProps) => {
  return <Box {...boxProps} />;
};

export type NavbarLinksProps = ComponentProps<typeof Box>;

export const NavbarLinks: FC<NavbarLinksProps> = (boxProps) => {
  return <Box as="nav" h="full" display="flex" {...boxProps} />;
};

export type NavbarLinkProps = { isActive?: boolean } & ComponentProps<
  typeof Link
>;

export const NavbarLink: FC<NavbarLinkProps> = ({ isActive, ...linkProps }) => {
  return (
    <Link
      px={4}
      h="full"
      display="flex"
      alignItems="center"
      color={isActive ? "gray.900" : "gray.600"}
      pointerEvents={isActive ? "none" : "auto"}
      _hover={{ textDecor: "none", color: "gray.900" }}
      position="relative"
      _after={{
        position: "absolute",
        content: "''",
        display: "block",
        w: "full",
        h: "2px",
        borderRadius: "2px",
        bg: "blue.500",
        bottom: "-1px",
        left: 0,
        opacity: isActive ? 1 : 0,
      }}
      {...linkProps}
    />
  );
};

export type NavbarRightProps = ComponentProps<typeof Box>;

export const NavbarRight: FC<NavbarRightProps> = (boxProps) => {
  return <Box ml="auto" {...boxProps} />;
};
