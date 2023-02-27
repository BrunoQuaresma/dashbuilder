import { Tag as ChTag } from "@chakra-ui/tag";
import { ComponentProps, FC } from "react";

export type TagProps = ComponentProps<typeof ChTag>;

export const Tag: FC<TagProps> = (tagProps) => {
  return <ChTag rounded="full" {...tagProps} />;
};
