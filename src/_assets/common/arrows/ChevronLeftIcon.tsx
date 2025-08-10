import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ChevronLeftIcon: FC<SVGCommonProps> = ({
  className,
  width = "24px",
  height = "24px",
  masterFill = "none",
  stroke = "currentColor",
  onClick
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={masterFill}
      viewBox='0 0 24 24'
      width={width}
      height={height}
      strokeWidth='1.5'
      stroke={stroke}
      onClick={onClick}
      className={className ?? ""}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 19.5 8.25 12l7.5-7.5'
      />
    </svg>
  );
};

export default ChevronLeftIcon;
