import { CSSProperties, ReactNode } from "react";

export interface CustomBasicDrawerI {
  title?: string;
  width?: number | string;
  open: boolean;
  onClose: () => void;
  className?: string;
  extra?: ReactNode;
  closable?: boolean;
  placement?: "right" | "left";
  children: ReactNode;
  closeIcon?: ReactNode;
  footer?: ReactNode;
  customBodyStyle?: CSSProperties;
  customHeaderStyle?: CSSProperties;
  bodyRef?: React.RefObject<HTMLDivElement | null>;
}
