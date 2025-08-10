/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { CustomBasicImagePlaceholderI } from "../interfaces/interface";

const CustomBasicImageServer: FC<CustomBasicImagePlaceholderI> = ({
  url,
  className,
  mobileUrl,
  alt,
  loading = "eager",
  fetchPriority = "auto",
  decoding = "auto",
}) => {
  return (
    <img
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      srcSet={`${url ? `${url},` : ""} ${mobileUrl ? `${mobileUrl} 2x` : ""}`}
      src={url}
      alt={alt}
      className={`${className ?? ""} loaded`}
    />
  );
};

export default CustomBasicImageServer;
