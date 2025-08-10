"use client";
import HttpClient from "@/_utils/httpClient";

export const fetchCreate = new HttpClient(
  process.env.OMDB_API_KEY || ""
);
