import { applyColorReplacements } from "./remoteSVGHelper";

export const convertTextToSVG = (
  svgContent: string,
  {
    defaultColors,
    masterFill,
    fill,
    secondaryFill,
    thirdFill,
    stroke,
    secondaryStroke,
  }: {
    defaultColors?: boolean;
    masterFill: string;
    fill: string;
    secondaryFill: string;
    thirdFill: string;
    stroke: string;
    secondaryStroke: string;
  }
): {
  svgAttributes: Record<string, string>;
  processedSVG: string;
} => {
  // Extraer atributos de la etiqueta <svg> (como viewBox, xmlns, etc.)
  const svgMatch = svgContent.match(/<svg([^>]*)>/);
  const attributes: Record<string, string> = {};

  if (svgMatch) {
    const svgTag = svgMatch[1]; // Contenido dentro de <svg ...>

    // Crear un objeto para los atributos del <svg>

    // Extraer todos los atributos del <svg>
    const regex = /(\w+)="([^"]*)"/g;
    let match;
    while ((match = regex.exec(svgTag)) !== null) {
      attributes[match[1]] = match[2];
    }
  }

  // Eliminar la etiqueta <svg> del contenido para dejar solo los elementos internos
  const contentWithoutSvgTag = svgContent.replace(/<svg[^>]*>|<\/svg>/g, "");

  // Actualizar el contenido SVG con los reemplazos de color
  const updatedSVG = defaultColors
    ? contentWithoutSvgTag
    : applyColorReplacements(
        contentWithoutSvgTag,
        { masterFill, fill, secondaryFill, thirdFill },
        { stroke, secondaryStroke }
      );

  return {
    svgAttributes: attributes,
    processedSVG: updatedSVG,
  };
};
