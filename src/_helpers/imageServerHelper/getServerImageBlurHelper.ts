import { fetchImageAsBase64 } from "@/_helpers/imageHelper";
import { StrapiFinalDataPageItem } from "@/_interfaces/StrapiData.interface";

//Permite obtener los "blur" de las imágenes en el servidor y transformarlos en base64 para mostrar el placeholder al cargar la página
export const getServerImageBlurHelper = async (
  serverSvgItemsData: StrapiFinalDataPageItem[]
) => {
  // Mapea y procesa los datos de forma asíncrona
  const imagesData = await Promise.all(
    serverSvgItemsData.map(async (image) => {
      const blur = image.extraImages?.[0]?.srcSet.desktop.blurUrl;
      const mobileBlur = image.extraImages?.[0]?.srcSet.mobile.blurUrl;

      // Obtiene las imágenes en base64 usando Promise.allSettled
      const [blurUrlResult, mobileBlurUrlResult] = await Promise.allSettled([
        fetchImageAsBase64(blur),
        fetchImageAsBase64(mobileBlur),
      ]);

      // Extrae los valores o asigna null en caso de error
      const blurImage =
        blurUrlResult?.status === "fulfilled"
          ? blurUrlResult.value.toString()
          : null;
      const mobileBlurImage =
        mobileBlurUrlResult?.status === "fulfilled"
          ? mobileBlurUrlResult.value.toString()
          : null;

      // Devuelve el objeto transformado
      return {
        code: image.code,
        image: image.extraImages?.[0]?.srcSet.desktop.url,
        blurImage,
        mobileBlurImage,
      };
    })
  );

  return imagesData;
};
