export interface CustomBasicImagePlaceholderI {
  id?: number | string;
  wrapperClassName?: string;
  className?: string;
  placeholderClassName?: string
  url: string;
  mobileUrl?: string;
  blur?: string;
  mobileBlur?: string;
  loading?: "eager" | "lazy";
  alt: string;
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
  mobileNoOpacity?: boolean;
  width?: string | number;
  height?: string | number;
}
