/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
if (process.env.NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
}
import { CustomBasicImagePlaceholderI } from "./interfaces/interface";
import CustomBasicImage from "./components/CustomBasicImage";
import { fetchImageAsBase64 } from "@/_helpers/imageHelper";

const CustomBasicImagePlaceholder: FC<CustomBasicImagePlaceholderI> = async ({
  id,
  className,
  wrapperClassName,
  url,
  mobileUrl,
  blur,
  mobileBlur,
  alt,
  loading = "eager",
  mobileNoOpacity = false,
  fetchPriority = "auto",
  decoding = "auto",
}) => {
  const [blurUrl, mobileBlurUrl] = await Promise.allSettled([
    fetchImageAsBase64(blur),
    fetchImageAsBase64(mobileBlur),
  ]).catch(() => [null, null]);

  return (
    <>
      <div
        id={`custom-basic-image-placeholder-${id}`}
        className={`custom-basic-image-placeholder-container ${
          mobileNoOpacity ? "no-opacity" : ""
        } ${wrapperClassName}`}
      >
        {/* Imagen de fondo blur para escritorio */}

        
        <CustomBasicImage
          id={id}
          className={`${className}`}
          url={url}
          mobileUrl={mobileUrl}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
        />

        {blurUrl?.status === "fulfilled" && (
          <img
            src={blurUrl.value as string}
            alt=''
            className='placeholder-image desktop'
            aria-hidden='true'
          />
        )}
        {/* Imagen de fondo blur para móviles */}
        {mobileBlurUrl?.status === "fulfilled" && (
          <img
            src={mobileBlurUrl.value as string}
            alt=''
            className='placeholder-image mobile'
            aria-hidden='true'
          />
        )}
      </div>
    </>
  );
};

export default CustomBasicImagePlaceholder;
