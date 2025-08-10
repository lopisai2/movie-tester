import { createElement, JSXElementConstructor, ReactElement } from "react";

// Función para obtener el Blob de una imagen desde una URL
export const getImageBlob = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
}

// Función para convertir un Blob a un SVG (si la imagen original es un SVG)
export const blobToSvg = async (blob: Response) => {
    const SVG = await blob.text();
    return SVG;
}

interface RemoteSVGI {
    svg: string
    className?: string
    style?: string
}

export type TypeRemoteSVGState = ReactElement<{ dangerouslySetInnerHTML: { __html: string | undefined; }; className: string | undefined; style: string | undefined; }, string | JSXElementConstructor<''>>

export const addClassStylesToRemoteSVG = ({ svg, className, style }: RemoteSVGI): TypeRemoteSVGState => {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svg, 'image/svg+xml')
    const svgElement = svgDoc.querySelector('svg')

    const svgReactElement = createElement('svg', {
        dangerouslySetInnerHTML: { __html: svgElement?.innerHTML },
        className,
        style
    })
    return svgReactElement
}