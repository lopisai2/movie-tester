import { getServerSVGHelper } from "./getServerSVGHelper";
import { getServerImageBlurHelper } from "./getServerImageBlurHelper";
import { StrapiFinalDataPageItem } from "@/_interfaces/StrapiData.interface";

//Permite obtener los datos desde el servidor para mostrarlos directamente al mostrar la página y evitar el js
export const getServerImagesObjectData = async ({
  strapItemData,
  itemCode,
}: {
  strapItemData: StrapiFinalDataPageItem | null;
  itemCode: string;
}) => {
  const heroCarouselData =
    strapItemData?.children?.find((item) => item.code === itemCode) ??
    undefined;

  //Resuelve ambas promesas al mismo tiempo para reducir el tiempo de respuesta del servidor
  const [serverSvgItemsDataRes, imagesDataRes] = await Promise.allSettled([
    getServerSVGHelper(heroCarouselData),
    getServerImageBlurHelper(heroCarouselData?.children ?? []),
  ]).catch(() => [null, null]);

  const serverSvgItemsData =
    serverSvgItemsDataRes?.status === "fulfilled"
      ? serverSvgItemsDataRes.value
      : null;
  const imagesData =
    imagesDataRes?.status === "fulfilled" ? imagesDataRes.value : [];

  const itemsData =
    serverSvgItemsData?.map((item) => ({
      code: item.code,
      name: item.value,
      description: item.description,
      image: item.image?.srcSet.desktop.url,
    })) ?? [];

  return {
    imagesData,
    itemsData,
  };
};
