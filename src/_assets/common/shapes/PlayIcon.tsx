import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC, useId } from "react";

export const PlayIcon: FC<SVGCommonProps> = ({
  className,
  width = "42px",
  height = "42px",
  masterFill = "none",
  fill = "#A8A8A8",
}) => {
  const svgId = useId();
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 42 42'
      xmlns='http://www.w3.org/2000/svg'
    >
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
        <path
          d='M21.0013 39.3337C31.1268 39.3337 39.3346 31.1258 39.3346 21.0003C39.3346 10.8748 31.1268 2.66699 21.0013 2.66699C10.8758 2.66699 2.66797 10.8748 2.66797 21.0003C2.66797 31.1258 10.8758 39.3337 21.0013 39.3337Z'
          fill='white'
          stroke='white'
          strokeWidth='3.66667'
          strokeLinejoin='round'
        />
        <path
          d='M17.3359 21.0001V14.6494L22.8359 17.8247L28.3359 21.0001L22.8359 24.1754L17.3359 27.3507V21.0001Z'
          fill='black'
          stroke='black'
          strokeWidth='3.66667'
          strokeLinejoin='round'
        />
      </mask>
      <g mask={`url(#${svgId})`}>
        <path
          d='M-0.998047 -0.999512H43.002V43.0005H-0.998047V-0.999512Z'
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default PlayIcon;