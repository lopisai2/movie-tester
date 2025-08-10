import HttpClient from "@/_utils/httpClient";

export const {
  OMDB_API_KEY = "",
} = process.env;

export const NODE_ENV = process.env.NODE_ENV;
export const fetchCreate = new HttpClient(
  OMDB_API_KEY
);

export enum RES_CODES {
  ERR_TOKEN = "EXPIRED_TOKEN",
  EXT_SRV = "EXTERNAL_SERVER_ERROR",
}
