import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC, useId } from "react";

export const CheckedIcon: FC<SVGCommonProps> = ({
  className,
  width = "28px",
  height = "28px",
  masterFill = "none",
  fill = "#06A47D",
}) => {
  const svgId = useId();
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 28 27'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.898438'
        y='0.648438'
        width='26.162'
        height='26.1127'
        fill='white'
        fillOpacity='0.01'
      />
      <mask
        id={svgId}
        style={{
          maskType: "luminance",
        }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={width}
        height={height}
      >
        <rect
          x='0.898438'
          y='0.648438'
          width='26.162'
          height='26.1127'
          fill='white'
        />
      </mask>
      <g mask={`url(#${svgId})`}>
        <path
          d='M10.9163 23.4775C10.6666 23.7287 10.3259 23.8689 9.97196 23.8689C9.61803 23.8689 9.27731 23.7287 9.02758 23.4775L1.48547 15.9337C0.702761 15.1509 0.702761 13.8817 1.48547 13.1004L2.42985 12.1557C3.2128 11.3729 4.48054 11.3729 5.26325 12.1557L9.97196 16.8649L22.6956 4.14029C23.4785 3.35753 24.7475 3.35753 25.529 4.14029L26.4734 5.08497C27.2561 5.86773 27.2561 7.13677 26.4734 7.9183L10.9163 23.4775Z'
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default CheckedIcon;