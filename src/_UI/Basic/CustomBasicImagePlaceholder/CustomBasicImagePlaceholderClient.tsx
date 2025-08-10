/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
if (process.env.NODE_ENV === "development") {
  // Importar archivo solo en desarrollo
  import("./styles.css");
}
import { CustomBasicImagePlaceholderI } from "./interfaces/interface";
import CustomBasicImage from "./components/CustomBasicImage";
import CustomBasicImageServer from "./components/CustomBasicImageServer";

const CustomBasicImagePlaceholderClient: FC<CustomBasicImagePlaceholderI> = ({
  id,
  className,
  url,
  mobileUrl,
  blur,
  mobileBlur,
  wrapperClassName,
  alt,
  loading = "eager",
  mobileNoOpacity = false,
  fetchPriority = "auto",
  decoding = "auto",
  placeholderClassName,
}) => {
  return (
    <div
      id={`custom-basic-image-placeholder-${id}`}
      className={`custom-basic-image-placeholder-container ${
        mobileNoOpacity ? "no-opacity" : ""
      } ${wrapperClassName}`}
    >
      {/* Imagen de fondo blur para escritorio */}
      {blur && (
        <img
          src={blur as string}
          alt=''
          className={`placeholder-image desktop ${placeholderClassName ?? ""}`}
          aria-hidden='true'
        />
      )}
      {/* Imagen de fondo blur para móviles */}
      {mobileBlur && (
        <img
          src={mobileBlur as string}
          alt=''
          className={`placeholder-image mobile ${placeholderClassName ?? ""}`}
          aria-hidden='true'
        />
      )}
      {mobileNoOpacity ? (
        <CustomBasicImageServer
          className={className}
          url={url}
          mobileUrl={mobileUrl}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
        />
      ) : (
        <CustomBasicImage
          className={className}
          url={url}
          mobileUrl={mobileUrl}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
        />
      )}
    </div>
  );
};

export default CustomBasicImagePlaceholderClient;
