import { Input } from "@/components/atoms";
import { InputFormType } from "@/shared";
import React, { FC } from "react";

export const InputForm: FC<Partial<InputFormType>> = ({ ...props }) => {
  return <Input {...props} />;
};
