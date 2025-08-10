import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ArrowRightIcon2: FC<SVGCommonProps> = ({
  className,
  width = "59px",
  height = "59px",
  masterFill = "var(--whiteVariant1)",
  fill = "var(--whiteVariant1)",
  stroke = "var(--whiteVariant1)",
  secondaryFill = "var(--blueVariant2)",
}) => {
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox={`0 0 59 59`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        opacity='0.4'
        cx='29.5'
        cy='29.5'
        r='29'
        fill={fill}
        fillOpacity='0.8'
        stroke={stroke}
      />
      <g opacity='0.9'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.6198 32.3033L26.2486 42.6745L23.6562 40.0822L32.7313 31.0072L23.6562 21.9322L26.2486 19.3398L36.6198 29.711C36.9634 30.0548 37.1565 30.521 37.1565 31.0072C37.1565 31.4933 36.9634 31.9595 36.6198 32.3033Z'
          fill={secondaryFill}
        />
      </g>
    </svg>
  );
};

export default ArrowRightIcon2;
