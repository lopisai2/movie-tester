import { FC } from "react";
import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import { convertTextToSVG } from "./helpers/converTextToSVGHelper";

export interface CustomRemoteSVGProps extends SVGCommonProps {
  url?: string;
  customSVG?: string;
  defaultColors?: boolean;
}

const CustomServerSVG: FC<CustomRemoteSVGProps> = ({
  className,
  customSVG = "",
  width = "50px",
  height = "50px",
  masterFill = "none",
  fill = "var(--primary)",
  secondaryFill = "var(--secondary)",
  thirdFill = "var(--secondaryMinus2)",
  stroke = "var(--primary)",
  secondaryStroke = "var(--secondary)",
  onClick,
  defaultColors,
}) => {
  const { svgAttributes, processedSVG } = convertTextToSVG(customSVG, {
    masterFill,
    fill,
    secondaryFill,
    thirdFill,
    stroke,
    secondaryStroke,
    defaultColors,
  });

  if (!processedSVG) return null;

  // Renderizar el <svg> con los atributos extraídos
  return (
    <svg
      {...svgAttributes}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      fill={masterFill}
      // Aplicar los atributos extraídos (viewBox, xmlns, etc.)
      dangerouslySetInnerHTML={{ __html: processedSVG }}
    />
  );
};

export default CustomServerSVG;
