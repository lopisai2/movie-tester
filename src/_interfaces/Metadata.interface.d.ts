export type MetaDataCommonProps = {
    params: Promise<{ id: string; lang: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };