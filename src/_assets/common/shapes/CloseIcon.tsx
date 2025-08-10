import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const CloseIcon: FC<SVGCommonProps> = ({
  className,
  width = "30px",
  height = "30px",
  masterFill = "none",
  fill = "#324467",
}) => {
  //   const svgId = useId();
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 30 30'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z'
        fill={fill}
      />
    </svg>
  );
};

export default CloseIcon;
