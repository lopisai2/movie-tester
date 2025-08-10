import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ChevronDoubleRightIcon: FC<SVGCommonProps> = ({
  className,
  width = "24px",
  height = "24px",
  masterFill = "none",
  stroke = "currentColor",
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={masterFill}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke={stroke}
      className={className ?? ""}
      width={width}
      height={height}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
      />
    </svg>
  );
};

export default ChevronDoubleRightIcon;
