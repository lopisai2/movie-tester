import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const GooglePlayIcon: FC<SVGCommonProps> = ({
  className,
  width = "16px",
  height = "16px",
  masterFill = "none",
  fill = "var(--white)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className ?? ""}
      fill={masterFill}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.2222 9.37384C15.2593 8.76324 15.2593 7.23675 14.2222 6.62616L11.5276 5.03958L8.32052 7.99993L11.5277 10.9604L14.2222 9.37384Z'
        fill={fill}
      />
      <path
        d='M10.6275 11.4904L7.58336 8.68039L1.03039 14.7293C1.23131 15.7587 2.38966 16.3407 3.33333 15.7851L10.6275 11.4904Z'
        fill={fill}
      />
      <path d='M1 13.3964L1 2.60344L6.8462 7.99993L1 13.3964Z' fill={fill} />
      <path
        d='M1.03041 1.2706L7.58336 7.31948L10.6274 4.50958L3.33333 0.214901C2.3897 -0.340703 1.2314 0.241212 1.03041 1.2706Z'
        fill={fill}
      />
    </svg>
  );
};
