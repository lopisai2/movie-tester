export const applyColorReplacements = (
    svgContent: string,
    fills: { masterFill: string; fill: string; secondaryFill: string; thirdFill: string },
    strokes: { stroke: string; secondaryStroke: string }
) => {
    let updatedSVG = svgContent;

    // Establecer el masterFill solo en la etiqueta <svg>
    updatedSVG = updatedSVG.replace(
        /<svg([^>]*)fill="[^"]*"([^>]*)>/,
        `<svg$1$2 fill="${fills.masterFill}">`
    );

    // Reemplazar los 'fill' de los <path> de manera no secuencial
    // Primero extraemos todos los paths que tienen fill
    const pathFillMatches = [...updatedSVG.matchAll(/<path[^>]*fill="([^"]*)"[^>]*>/g)];

    // Obtenemos los valores de 'fill' en el SVG
    const fillColors = pathFillMatches.map(match => match[1]);

    // Contamos las ocurrencias de cada color de fill
    const fillColorCount = fillColors.reduce((countMap, color) => {
        countMap[color] = (countMap[color] || 0) + 1;
        return countMap;
    }, {} as Record<string, number>);

    // Ordenamos los colores de 'fill' por la cantidad de ocurrencias
    const sortedFillColors = Object.entries(fillColorCount)
        .sort(([, countA], [, countB]) => countB - countA)
        .map(([color]) => color);

    // Limitar a los 3 colores más frecuentes
    const topFillColors = sortedFillColors.slice(0, 3);

    // Reemplazar los 'fill' de los paths con los 3 colores más frecuentes
    updatedSVG = updatedSVG.replace(
        /<path([^>]*)fill="([^"]*)"([^>]*)>/g,
        (match, p1, currentFill, p2) => {
            const fillIndex = topFillColors.indexOf(currentFill);
            if (fillIndex === 0) {
                return `<path${p1}fill="${fills.fill}"${p2}>`; // Aplicamos el 'fill' principal
            } else if (fillIndex === 1) {
                return `<path${p1}fill="${fills.secondaryFill}"${p2}>`; // Aplicamos el 'fill' secundario
            } else if (fillIndex === 2) {
                return `<path${p1}fill="${fills.thirdFill}"${p2}>`; // Aplicamos el 'fill' terciario
            }
            return match; // De lo contrario, no lo cambiamos
        }
    );

    // Reemplazar los 'stroke' de los <path> de manera no secuencial
    // Primero extraemos todos los paths que tienen stroke
    const pathStrokeMatches = [...updatedSVG.matchAll(/<path[^>]*stroke="([^"]*)"[^>]*>/g)];

    // Obtenemos los valores de 'stroke' en el SVG
    const strokeColors = pathStrokeMatches.map(match => match[1]);

    // Contamos las ocurrencias de cada color de stroke
    const strokeColorCount = strokeColors.reduce((countMap, color) => {
        countMap[color] = (countMap[color] || 0) + 1;
        return countMap;
    }, {} as Record<string, number>);

    // Ordenamos los colores de 'stroke' por la cantidad de ocurrencias
    const sortedStrokeColors = Object.entries(strokeColorCount)
        .sort(([, countA], [, countB]) => countB - countA)
        .map(([color]) => color);

    // Limitar a los 3 colores más frecuentes
    const topStrokeColors = sortedStrokeColors.slice(0, 3);

    // Reemplazar los 'stroke' de los paths con los 3 colores más frecuentes
    updatedSVG = updatedSVG.replace(
        /<path([^>]*)stroke="([^"]*)"([^>]*)>/g,
        (match, p1, currentStroke, p2) => {
            const strokeIndex = topStrokeColors.indexOf(currentStroke);
            if (strokeIndex === 0) {
                return `<path${p1}stroke="${strokes.stroke}"${p2}>`; // Aplicamos el 'stroke' principal
            } else if (strokeIndex === 1) {
                return `<path${p1}stroke="${strokes.secondaryStroke}"${p2}>`; // Aplicamos el 'stroke' secundario
            } else if (strokeIndex === 2) {
                return `<path${p1}stroke="${strokes.secondaryStroke}"${p2}>`; // Aplicamos el 'stroke' terciario
            }
            return match; // De lo contrario, no lo cambiamos
        }
    );

    return updatedSVG;
};
