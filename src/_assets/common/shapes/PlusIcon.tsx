import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const PlusIcon: FC<SVGCommonProps> = ({
  className,
  width = "24px",
  height = "24px",
  masterFill = "none",
  fill = "var(--secondaryMinus2)",
}) => {
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z' fill={fill} />
    </svg>
  );
};
