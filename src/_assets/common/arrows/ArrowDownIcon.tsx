import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ArrowDownIcon: FC<SVGCommonProps> = ({
  className,
  width = "8px",
  height = "8px",
  masterFill = "none",
  fill = "#FFF",
}) => {
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 8 7'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path opacity='0.75' d='M4 6.82959L0 0.475533H8L4 6.82959Z' fill={fill} />
    </svg>
  );
};

export default ArrowDownIcon