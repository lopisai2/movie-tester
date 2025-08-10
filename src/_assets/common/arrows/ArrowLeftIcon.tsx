import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ArrowLeftIcon: FC<SVGCommonProps> = ({
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
      <path d='M12.1016 21.1992H34.2016V23.1992H12.1016V21.1992Z' fill={fill} />
      <circle
        cx='22.5'
        cy='22.5'
        r='21.5'
        transform='matrix(-1 0 0 1 45 0)'
        stroke={stroke}
        strokeWidth='2'
      />
      <path d='M23.5 33.5L11.5 22.5L23.5 11' stroke={stroke} strokeWidth='2' />
    </svg>
  );
};

export default ArrowLeftIcon;
