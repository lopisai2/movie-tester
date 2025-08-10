import { StrapiFinalDataPageItem } from "@/_interfaces/StrapiData.interface";

const svgItems = async (url: string) => {
  try {
    if (!url) return "";
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error fetching SVG: ${response.statusText}`);
    const svgText = await response.text();
    return svgText;
  } catch (error) {
    console.error(error);
    return null;
  }
};

//Permite obtener el SVG remote desde el servidor y convertirlo en un string para mostrarlo en la página inmediatamente
export const getServerSVGHelper = async (
  strapiItemData?: StrapiFinalDataPageItem | null
): Promise<StrapiFinalDataPageItem[]> => {
  if (!strapiItemData) return [];
  const updatedChildren = await Promise.allSettled(
    strapiItemData?.children?.map(async (item) => {
      const svgContent = await svgItems(
        item?.image?.srcSet.desktop.url || ""
      ).catch(() => "");
      return {
        ...item,
        image: {
          ...item?.image,
          srcSet: {
            ...item?.image?.srcSet,
            desktop: {
              ...item?.image?.srcSet.desktop,
              url: svgContent || "", // Actualizar con el contenido del SVG
            },
            mobile: {
              ...item?.image?.srcSet.mobile,
            },
            tablet: {
              ...item?.image?.srcSet.tablet,
            },
          },
        },
      };
    }) || []
  );

  // Filtrar resultados exitosos
  const resolvedChildren = updatedChildren
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  return resolvedChildren;
};
