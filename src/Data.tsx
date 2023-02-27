import { Box, GridItem, Text } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type DataProps = ComponentProps<typeof Box>;

export const Data: React.FC<DataProps> = (boxProps) => {
  return <GridItem display="flex" flexDir="column" gap={0.5} {...boxProps} />;
};

export type DataLabelProps = ComponentProps<typeof Text>;

export const DataLabel: FC<DataLabelProps> = (textProps) => {
  return (
    <Text
      as="span"
      fontSize="xs"
      color="gray.600"
      textTransform="uppercase"
      fontWeight="semibold"
      letterSpacing="wide"
      {...textProps}
    />
  );
};

export type DataInfoProps = ComponentProps<typeof Text>;

export const DataInfo: FC<DataInfoProps> = (textProps) => {
  return <Text as="span" fontSize="sm" {...textProps} />;
};

export type DataGridProps = { columns: number } & ComponentProps<typeof Box>;

export const DataGrid: FC<DataGridProps> = ({ columns, ...boxProps }) => {
  return (
    <Box
      display="grid"
      gap={12}
      gridTemplateColumns={`repeat(${columns}, minmax(0, 1fr))`}
      {...boxProps}
    />
  );
};

export type DataFluidProps = ComponentProps<typeof Box>;

export const DataFluid: FC<DataFluidProps> = (boxProps) => {
  return (
    <Box display="flex" flexDir="row" flexWrap="wrap" gap={12} {...boxProps} />
  );
};
