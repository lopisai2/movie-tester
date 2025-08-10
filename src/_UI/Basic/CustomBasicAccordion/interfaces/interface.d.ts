import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC, ReactNode } from "react";

export interface CustomBasicAccordionI {
  className?: string;
  items: {
    label: ReactNode | string;
    content: ReactNode | string;
  }[];
  Icon?: FC<SVGCommonProps>;
  CloseIcon?: FC<SVGCommonProps>;
}

export interface AccordionItemI {
  id: number;
  item: {
    label: ReactNode | string;
    content: ReactNode | string;
  };
  className?: string;
  Icon?: FC<SVGCommonProps>;
  CloseIcon?: FC<SVGCommonProps>;
}

export interface useCustomBasicAccordionI {
  className?: string;
}
