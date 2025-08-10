import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { FC } from "react";

export const ArrowDownIcon2: FC<SVGCommonProps> = ({
  className,
  width = "16px",
  height = "16px",
  masterFill = "none",
  fill = "var(--white)",
}) => {
  return (
    <svg
      className={className ?? ""}
      width={width}
      height={height}
      fill={masterFill}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.3644 5.29344C14.1769 5.10597 13.9226 5.00065 13.6574 5.00065C13.3923 5.00065 13.138 5.10597 12.9504 5.29344L8.00044 10.2434L3.05044 5.29344C2.86184 5.11128 2.60923 5.01049 2.34704 5.01277C2.08484 5.01504 1.83403 5.12021 1.64862 5.30562C1.46321 5.49103 1.35804 5.74184 1.35577 6.00404C1.35349 6.26624 1.45428 6.51884 1.63644 6.70744L7.29344 12.3644C7.48097 12.5519 7.73528 12.6572 8.00044 12.6572C8.2656 12.6572 8.51991 12.5519 8.70744 12.3644L14.3644 6.70744C14.5519 6.51991 14.6572 6.2656 14.6572 6.00044C14.6572 5.73528 14.5519 5.48097 14.3644 5.29344Z'
        fill={fill}
      />
    </svg>
  );
};
