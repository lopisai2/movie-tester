/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
if (process.env.NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
}
import { CustomBasicImagePlaceholderI } from "./interfaces/interface";
import CustomBasicImage from "./components/CustomBasicImage";
import { fetchImageAsBase64 } from "@/_helpers/imageHelper";

const CustomBasicImagePlaceholderFromClient: FC<
  CustomBasicImagePlaceholderI
> = ({
  id,
  className,
  wrapperClassName,
  url,
  mobileUrl,
  blur,
  mobileBlur,
  alt,
  loading = "eager",
  fetchPriority = "auto",
  decoding = "auto",
}) => {
  const [blurUrl, setBlurUrl] = useState("");
  const [mobileBlurUrl, setMobileBlurUrl] = useState("");
  
  useEffect(() => {
    if (!blur) return;
    const getInitialData = async () => {
      const [blurUrl, mobileBlurUrl] = await Promise.allSettled([
        fetchImageAsBase64(blur),
        fetchImageAsBase64(mobileBlur),
      ]).catch(() => [null, null]);
      if (blurUrl?.status === "fulfilled") setBlurUrl(blurUrl.value as string);
      if (mobileBlurUrl?.status === "fulfilled")
        setMobileBlurUrl(mobileBlurUrl.value as string);
    };
    getInitialData();
  }, [blur, mobileBlur]);

  return (
    <div
      id={`custom-basic-image-placeholder-${id}`}
      className={`custom-basic-image-placeholder-container ${wrapperClassName}`}
    >
      {/* Imagen de fondo blur para escritorio */}
      {blurUrl && (
        <img
          src={blurUrl}
          alt=''
          className='placeholder-image desktop'
          aria-hidden='true'
        />
      )}

      {/* Imagen de fondo blur para móviles */}
      {mobileBlurUrl && (
        <img
          src={mobileBlurUrl}
          alt=''
          className='placeholder-image mobile'
          aria-hidden='true'
        />
      )}
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
    </div>
  );
};

export default CustomBasicImagePlaceholderFromClient;
