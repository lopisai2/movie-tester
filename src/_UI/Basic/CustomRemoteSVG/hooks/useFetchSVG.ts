import { useEffect, useState } from "react";

const useFetchSVG = ({
  url,
  customSVG,
}: {
  url?: string;
  customSVG?: string;
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    if (customSVG) return setSvgContent(customSVG);
    if (!url) return setSvgContent(null);
    const fetchSVG = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Error fetching SVG: ${response.statusText}`);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error(error);
        setSvgContent(null);
      }
    };

    fetchSVG();
  }, [url, customSVG]);

  return svgContent;
};

export default useFetchSVG;
