import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";
import { FiSearch } from "react-icons/fi";

export type SearchFieldProps = {
  inputGroupProps?: ComponentProps<typeof InputGroup>;
  inputProps?: ComponentProps<typeof Input>;
};

export const SearchField: FC<SearchFieldProps> = ({
  inputGroupProps,
  inputProps,
}) => {
  return (
    <InputGroup {...inputGroupProps}>
      <InputLeftElement
        pointerEvents="none"
        color="gray.500"
        children={<FiSearch />}
      />
      <Input placeholder="Type to search..." {...inputProps} />
    </InputGroup>
  );
};
