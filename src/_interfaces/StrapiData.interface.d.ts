export interface StrapiDataRaw {
  id: number;
  attributes: {
    moduleCode: string;
    moduleName: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    pages: StrapiDataRawPage[];
  };
}

export interface StrapiDataRawPage {
  id: number;
  __component?: string;
  pageCode: string;
  items: StrapiDataPageItem[];
}

export interface StrapiDataPageItem {
  id?: number;
  code: string;
  active: boolean;
  value: string;
  description: string;
  extraValue: string;
  mobileValue?: string;
  mobileDescription?: string;
  mobileExtraValue?: string;
  redirectTo?: string;
  image: StrapiDataPageItemSingleImage;
  blurImage: StrapiDataPageItemSingleImage;
  mobileImage: StrapiDataPageItemSingleImage;
  mobileBlurImage: StrapiDataPageItemSingleImage;
  extraImages: StrapiDataPageItemMultiImage;
  extraBlurImages: StrapiDataPageItemMultiImage;
  extraMobileImages: StrapiDataPageItemMultiImage;
  extraMobileBlurImages: StrapiDataPageItemMultiImage;
  styles: StrapiDataRawStyles | null;
  children: StrapiDataPageItem[] | null;
}

export interface StrapiDataPageItemMultiImage {
  data: StrapiDataPageItemImageCommon[] | null;
}

export interface StrapiDataPageItemSingleImage {
  data: StrapiDataPageItemImageCommon | null;
}

export interface StrapiDataPageItemImageCommon {
  id: number;
  attributes: {
    url: string;
    size?: number;
  };
}

export interface StrapiDataRawStyles {
  commonProps: {
    color: string | null;
    fontSize: string | null;
    fontWeight: string | null;
    backgroundColor: string | null;
    position: string | null;
    top: string | null;
    left: string | null;
    right: string | null;
    bottom: string | null;
    margin?: string | null;
    maxWidth?: string | null;
  } | null;
  svgProps: {
    fill: string | null;
    secondaryFill: string | null;
    thirdFill: string | null;
    stroke: string | null;
    secondaryStroke: string | null;
    width: string | null;
    height: string | null;
  } | null;
  className: string | null;
}

export interface StrapiFinalData {
  id: number;
  moduleCode: string;
  moduleName: string;
  locale: string;
  pages: StrapiFinalDataPage[];
}

export interface StrapiFinalDataPage {
  id: number;
  pageCode: string;
  items: StrapiFinalDataPageItem[];
}

export interface StrapiFinalDataPageItem
  extends Omit<
    StrapiDataPageItem,
    | "blurImage"
    | "mobileBlurImage"
    | "extraBlurImages"
    | "extraMobileBlurImages"
    | "mobileImage"
    | "extraMobileImages"
  > {
  children: StrapiFinalDataPageItem[] | null;
  image: {
    srcSet: {
      mobile: {
        id?: number;
        url?: string;
        blurUrl?: string;
        size?: number;
      };
      tablet: {
        id?: number;
        url?: string;
        blurUrl?: string;
        size?: number;
      } | null;
      desktop: {
        id?: number;
        url?: string;
        blurUrl?: string;
        size?: number;
      };
    };
  } | null;
  extraImages:
    | {
        srcSet: {
          mobile: {
            id?: number;
            url?: string;
            blurUrl?: string;
            size?: number;
          };
          tablet: {
            id?: number;
            url?: string;
            blurUrl?: string;
            size?: number;
          } | null;
          desktop: {
            id?: number;
            url?: string;
            blurUrl?: string;
            size?: number;
          };
        };
      }[]
    | null;
}

export interface BuilStrapiI {
  collection?: string;
  locale: string;
  module: string;
  pages: string[];
  arrays: string[];
  filters?: { type: string; code: string }[];
  hasImages?: boolean;
  all?: boolean;
}
