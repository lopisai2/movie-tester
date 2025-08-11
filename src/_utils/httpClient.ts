import {
  ExtendedResponse,
  ResponseServiceData,
  verifyBodyResponse,
} from "@/_helpers/verifyBodyResponse";

// HttpClient.ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestConfig {
  method?: HttpMethod;
  credentials?: "include" | "omit" | "same-origin";
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | undefined>;
}

interface RequestConfigFull extends RequestConfig {
  body?: unknown;
}

class HttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      ...defaultHeaders,
    };
  }

  private buildUrl(
    url: string,
    params?: Record<string, string | number | boolean>
  ): string {    
    const queryString =
      params && Object.keys(params).length
        ? "?" +
          Object.entries(params)
            .map(
              ([key, val]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
            )
            .join("&")
        : "";
    return `${this.baseURL}${url}${queryString}`;
  }

  private async request<T>(
    url: string,
    config: RequestConfigFull
  ): Promise<ResponseServiceData<T>> {
    const {
      method = "GET",
      headers = {},
      body,
      params,
      credentials = "include",
    } = config;

    const filteredParams = Object.fromEntries(
      Object.entries(params || {}).filter(([, value]) => value !== undefined)
    ) as {
      [key: string]: string | number;
    };
    const fullUrl = this.buildUrl(url, filteredParams);
    
    try {
      // Determina si `Content-Type` ya está definido
      const hasContentType = Object.keys(headers).some(
        (key) => key.toLowerCase() === "content-type"
      );

      // Si no se especifica `Content-Type`, asumimos que el cuerpo es JSON
      const finalBody =
        hasContentType && headers["Content-Type"]?.includes("application/json")
          ? JSON.stringify(body)
          : body instanceof FormData
          ? body // Para FormData, dejamos el cuerpo intacto
          : JSON.stringify(body);

      // Si el cuerpo no es FormData y no se especifica `Content-Type`, asumimos JSON
      if (!(finalBody instanceof FormData) && !headers["Content-Type"]) {
        headers["Content-Type"] = "application/json";
      }

      const response: ExtendedResponse<T> = await fetch(fullUrl, {
        method,
        headers: { ...this.defaultHeaders, ...headers },
        body: finalBody,
        credentials, // Para recibir, por ejemplo, cookies del servidor
        next: { revalidate: process.env.NODE_ENV === "production" ? 60 : 0 },
      });

      // Parseamos el cuerpo de la respuesta
      response.parsedBody = await response.json().catch(() => null);

      return verifyBodyResponse<T>({
        serviceData: response,
        success: response.ok,
      });
    } catch (error) {
      return verifyBodyResponse<T>({
        serviceData: error as Error,
        success: false,
      });
    }
  }

  public get<T>(url: string, config?: RequestConfig) {
    return this.request<T>(url, {
      method: "GET",
      headers: config?.headers,
      params: config?.params,
    });
  }

  public post<T>(url: string, body?: unknown, config?: RequestConfig) {
    return this.request<T>(url, {
      method: "POST",
      headers: config?.headers,
      body,
    });
  }

  public put<T>(url: string, body?: unknown, config?: RequestConfig) {
    return this.request<T>(url, {
      method: "PUT",
      headers: config?.headers,
      body,
    });
  }

  public delete<T>(url: string, config?: RequestConfig) {
    return this.request<T>(url, { method: "DELETE", headers: config?.headers });
  }
}

export default HttpClient;
