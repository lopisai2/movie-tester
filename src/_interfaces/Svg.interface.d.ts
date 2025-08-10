export interface SVGCommonProps {
    className?: string;
    width?: string;
    height?: string;
    masterFill?: string;
    fill?: string;
    secondaryFill?: string;
    thirdFill?: string;
    stroke?: string;
    secondaryStroke?: string;
    onClick?: () => void | Promise<void>;
    style?: React.CSSProperties;
}
