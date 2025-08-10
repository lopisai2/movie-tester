import { NODE_ENV } from "@/_config";
import {
  ExtendedResponse,
  ResponseServiceData,
  verifyBodyResponse,
} from "@/_helpers/verifyBodyResponse";

// HttpClient.ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestConfig {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number>;
}

class HttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...defaultHeaders,
    };
  }

  private buildUrl(
    url: string,
    params?: Record<string, string | number>
  ): string {
    const queryString = params
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
    config: RequestConfig
  ): Promise<ResponseServiceData<T>> {
    const { method = "GET", headers = {}, body, params } = config;
    const fullUrl = this.buildUrl(url, params);
    try {
      const response: ExtendedResponse<T> = await fetch(fullUrl, {
        method,
        headers: { ...this.defaultHeaders, ...headers },
        body: body ? JSON.stringify(body) : undefined,
        next: { revalidate: NODE_ENV === "production" ? 60 : 0 },
      });

      // Guardamos el cuerpo parseado en `parsedBody` con `data` y opcionalmente `meta`
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

  public get<T>(
    url: string,
    config?: {
      params?: Record<string, string | number>;
      headers?: Record<string, string>;
    }
  ) {
    return this.request<T>(url, {
      method: "GET",
      headers: config?.headers,
      params: config?.params,
    });
  }

  public post<T>(
    url: string,
    body?: unknown,
    config?: {
      params?: Record<string, string | number>;
      headers?: Record<string, string>;
    }
  ) {
    return this.request<T>(url, {
      method: "POST",
      headers: config?.headers,
      params: config?.params,
      body,
    });
  }

  public put<T>(
    url: string,
    body?: unknown,
    config?: {
      params?: Record<string, string | number>;
      headers?: Record<string, string>;
    }
  ) {
    return this.request<T>(url, {
      method: "PUT",
      body,
      headers: config?.headers,
      params: config?.params,
    });
  }

  public delete<T>(
    url: string,
    config?: {
      params?: Record<string, string | number>;
      headers?: Record<string, string>;
    }
  ) {
    return this.request<T>(url, {
      method: "DELETE",
      headers: config?.headers,
      params: config?.params,
    });
  }
}

export default HttpClient;
