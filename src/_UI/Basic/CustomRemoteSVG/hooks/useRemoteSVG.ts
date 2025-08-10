import { useEffect, useState } from "react";
import useFetchSVG from "./useFetchSVG";
import { applyColorReplacements } from "../helpers/remoteSVGHelper";
import { CustomRemoteSVGProps } from "../CustomRemoteSVG";

export const useRemoteSVG = ({
  url,
  masterFill = "none",
  fill = "var(--primary)",
  secondaryFill = "var(--secondary)",
  thirdFill = "var(--secondaryMinus2)",
  stroke = "var(--primary)",
  secondaryStroke = "var(--secondary)",
}: CustomRemoteSVGProps) => {
  const svgContent = useFetchSVG({ url });
  const [processedSVG, setProcessedSVG] = useState<string | null>(null);
  const [svgAttributes, setSvgAttributes] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    if (svgContent) {
      // Extraer atributos de la etiqueta <svg> (como viewBox, xmlns, etc.)
      const svgMatch = svgContent.match(/<svg([^>]*)>/);

      if (svgMatch) {
        const svgTag = svgMatch[1]; // Contenido dentro de <svg ...>

        // Crear un objeto para los atributos del <svg>
        const attributes: Record<string, string> = {};

        // Extraer todos los atributos del <svg>
        const regex = /(\w+)="([^"]*)"/g;
        let match;
        while ((match = regex.exec(svgTag)) !== null) {
          attributes[match[1]] = match[2];
        }

        setSvgAttributes(attributes);
      }

      // Eliminar la etiqueta <svg> del contenido para dejar solo los elementos internos
      const contentWithoutSvgTag = svgContent.replace(
        /<svg[^>]*>|<\/svg>/g,
        ""
      );

      // Actualizar el contenido SVG con los reemplazos de color
      const updatedSVG = applyColorReplacements(
        contentWithoutSvgTag,
        { masterFill, fill, secondaryFill, thirdFill },
        { stroke, secondaryStroke }
      );

      setProcessedSVG(updatedSVG);
    }
  }, [
    svgContent,
    masterFill,
    fill,
    secondaryFill,
    thirdFill,
    stroke,
    secondaryStroke,
  ]);

  return {
    processedSVG,
    svgAttributes,
  };
};
