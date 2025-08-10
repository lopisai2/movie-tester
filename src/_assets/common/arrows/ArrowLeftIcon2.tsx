import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ArrowLeftIcon2: FC<SVGCommonProps> = ({
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
      className={`${className ?? ""}`}
      fill={masterFill}
      width={width}
      height={height}
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
          d='M21.3802 32.3033L31.7514 42.6745L34.3438 40.0822L25.2687 31.0072L34.3438 21.9322L31.7514 19.3398L21.3802 29.711C21.0366 30.0548 20.8435 30.521 20.8435 31.0072C20.8435 31.4933 21.0366 31.9595 21.3802 32.3033Z'
          fill={secondaryFill}
        />
      </g>
    </svg>
  );
};

export default ArrowLeftIcon2;
