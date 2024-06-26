import { Input } from "@/components/atoms";
import { InputSearchType } from "@/shared";
import React, { FC } from "react";

interface indexProps {
  name: string;
}

export const InputSearch: FC<Partial<InputSearchType>> = ({
 ...props
}) => {
  return <Input {...props}></Input>;
};
