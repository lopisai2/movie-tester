"use client";
import { FC, useEffect, useState } from "react";
import { SVGCommonProps } from "@/_interfaces/Svg.interface";
import useFetchSVG from "./hooks/useFetchSVG";
import { convertTextToSVG } from "./helpers/converTextToSVGHelper";

export interface CustomRemoteSVGProps extends SVGCommonProps {
  url?: string;
  customSVG?: string;
  defaultColors?: boolean;
}

const CustomRemoteSVG: FC<CustomRemoteSVGProps> = ({
  url,
  className,
  customSVG,
  width = "50px",
  height = "50px",
  masterFill = "none",
  fill = "var(--primary)",
  secondaryFill = "var(--secondary)",
  thirdFill = "var(--secondaryMinus2)",
  stroke = "var(--primary)",
  secondaryStroke = "var(--secondary)",
  defaultColors,
  onClick,
}) => {
  const svgContent = useFetchSVG({ url, customSVG });
  const [processedSVG, setProcessedSVG] = useState<string | null>(null);
  const [svgAttributes, setSvgAttributes] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    if (svgContent) {
      const { svgAttributes, processedSVG } = convertTextToSVG(svgContent, {
        defaultColors,
        masterFill,
        fill,
        secondaryFill,
        thirdFill,
        stroke,
        secondaryStroke,
      });
      setSvgAttributes(svgAttributes);
      setProcessedSVG(processedSVG);
    }
  }, [
    svgContent,
    defaultColors,
    masterFill,
    fill,
    secondaryFill,
    thirdFill,
    stroke,
    secondaryStroke,
  ]);

  if (!processedSVG) return <svg width={width} height={height} />;

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

export default CustomRemoteSVG;
