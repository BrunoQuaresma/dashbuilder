import { Button } from "@chakra-ui/button";
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/input";
import { FC, useState } from "react";

export type PasswordFieldProps = InputProps & {
  defaultShowValue: boolean;
};

export const PasswordField: FC<PasswordFieldProps> = ({
  defaultShowValue,
  ...inputProps
}) => {
  const [showValue, setShowValue] = useState(defaultShowValue);
  const handleClick = () => setShowValue(!showValue);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={showValue ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {showValue ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
