import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const SemiCircleIcon: FC<SVGCommonProps> = ({
  className,
  width = "663px",
  height = "405px",
  masterFill = "none",
  stroke = "var(--primary)",
}) => {
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 663 405'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M331.417 25C161.987 25 25 183.31 25 379.113H637.834C637.834 183.31 499.946 25 331.417 25V25Z'
        stroke={stroke}
        strokeWidth='50'
      />
    </svg>
  );
};

export default SemiCircleIcon;
