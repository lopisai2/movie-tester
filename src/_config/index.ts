import HttpClient from "@/_utils/httpClient";

export const {
  API_URL = "",
  OMDB_API_KEY = "",
} = process.env;

export const NEXT_PUBLIC_SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:6000/api";
export const NODE_ENV = process.env.NODE_ENV;
export const fetchServerCreate = new HttpClient(
  API_URL
);

export const fetchClientCreate = new HttpClient(
  NEXT_PUBLIC_SERVER_API_URL
);

export enum RES_CODES {
  ERR_TOKEN = "EXPIRED_TOKEN",
  EXT_SRV = "EXTERNAL_SERVER_ERROR",
}
