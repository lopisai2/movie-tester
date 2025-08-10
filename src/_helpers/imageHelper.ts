export const fetchImageAsBase64 = async (
  url?: string
): Promise<string | Error> => {
  try {
    if (!url || url === "undefined") throw new Error(`La url está vacía`);
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:image/jpeg;base64,${base64}`;
  } catch (error: unknown) {
    throw (error as Error).message;
  }
};
