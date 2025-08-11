import HttpClient from "@/_utils/httpClient";

export const {
  API_URL = "",
  SERVER_API_URL = "http://localhost:3000/api",
  OMDB_API_KEY = "",
} = process.env;

export const NODE_ENV = process.env.NODE_ENV;
export const fetchServerCreate = new HttpClient(
  API_URL
);

export const fetchClientCreate = new HttpClient(
  SERVER_API_URL
);

export enum RES_CODES {
  ERR_TOKEN = "EXPIRED_TOKEN",
  EXT_SRV = "EXTERNAL_SERVER_ERROR",
}
