import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const UserIcon: FC<SVGCommonProps> = ({
  className,
  width = "40px",
  height = "40px",
  masterFill = "none",
  fill = "var(--secondary)",
  secondaryFill = "#4C6189",
}) => {
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 40 41'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect y='0.234375' width='40' height='40' rx='20' fill={secondaryFill} />
      <path
        d='M20 18.2344C22.2091 18.2344 24 16.4435 24 14.2344C24 12.0252 22.2091 10.2344 20 10.2344C17.7909 10.2344 16 12.0252 16 14.2344C16 16.4435 17.7909 18.2344 20 18.2344Z'
        fill={fill}
      />
      <path
        d='M28 25.7344C28 28.2194 28 30.2344 20 30.2344C12 30.2344 12 28.2194 12 25.7344C12 23.2494 15.582 21.2344 20 21.2344C24.418 21.2344 28 23.2494 28 25.7344Z'
        fill={fill}
      />
    </svg>
  );
};


export default UserIcon