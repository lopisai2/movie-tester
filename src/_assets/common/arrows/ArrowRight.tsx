import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ArrowRightIcon: FC<SVGCommonProps> = ({
  className,
  width = "45px",
  height = "45px",
  masterFill = "none",
  fill = "var(--secondaryMinus2)",
  stroke = "var(--secondaryMinus2)",
}) => {
  return (
    <svg
        className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 45 45'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M32.8984 21.1992H10.7984V23.1992H32.8984V21.1992Z'
        fill={fill}
      />
      <circle cx='22.5' cy='22.5' r='21.5' stroke={stroke} strokeWidth='2' />
      <path
        d='M21.5 33.5L33.5 22.5L21.5 11'
        stroke={stroke}
        strokeWidth='2'
      />
    </svg>
  );
};

export default ArrowRightIcon
