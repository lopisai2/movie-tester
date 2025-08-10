import { UseFormReturnType } from "@mantine/form";
import { ReactNode } from "react";

export interface CustomBasicSelectI {
  id: string;
  className?: string;
  placeholder?: string;
  items: {
    id: string;
    name: ReactNode | string;
  }[];
  label?: ReactNode | string;
  form?:
    | UseFormReturnType<{ [key: string]: string }>
    | UseFormReturnType<{ [key: string]: string | boolean }>
    | UseFormReturnType<{ [key: string]: string | boolean | string[] }>;
  name: string;
  onChange?: (value: string | number) => void;
  value?: string
  defaultValue?: string;
  allowClear?: boolean;
}

export interface SelectItemI {
  id: number;
  item: {
    id: string;
    name: ReactNode | string;
  };
  className?: string;
}

export interface useCustomBasicSelectI {
  className?: string;
}
