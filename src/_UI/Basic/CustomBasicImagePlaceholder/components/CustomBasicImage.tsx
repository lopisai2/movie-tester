"use client";
/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef, useState } from "react";
import { CustomBasicImagePlaceholderI } from "../interfaces/interface";

const CustomBasicImage: FC<CustomBasicImagePlaceholderI> = ({
  id,
  url,
  className,
  mobileUrl,
  alt,
  loading,
  fetchPriority = "auto",
  decoding = "auto",
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const imgRef = useRef<HTMLImageElement>(null);

  // Detectar si es móvil o escritorio y cambiar la imagen
  useEffect(() => {
    const updateImage = () => {
      setImageSrc(window.innerWidth < 768 ? mobileUrl || url : url);
    };

    updateImage(); // Determina la imagen correcta al cargar

    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [url, mobileUrl]);

  useEffect(() => {
    if (!imgRef.current) return;
    if (imgRef.current.complete) {
      setIsLoaded(true);
    } else {
      imgRef.current.addEventListener("load", () => {
        setIsLoaded(true);
      });
    }
  }, [id]);

  if (!url && !mobileUrl) return null;

  return (
    <img
      width={width}
      height={height}
      ref={imgRef}
      fetchPriority={fetchPriority}
      decoding={decoding}
      loading={loading}
      src={imageSrc}
      alt={alt}
      className={`${className ?? ""} ${isLoaded ? "loaded" : ""}`}
    />
  );
};

export default CustomBasicImage;
