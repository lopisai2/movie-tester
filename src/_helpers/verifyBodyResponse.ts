// src/types/ApiResponse.ts

export interface MetaData {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface ExtendedResponse<T> extends Response {
  parsedBody?: {
    data?: T;
    meta?: Record<string, MetaData>;
    code: string;
    message?: string;
  };
}

export interface ResponseServiceData<T> {
  status: number | string;
  code: string | null;
  data: {
    data?: T;
    meta?: Record<string, MetaData>;
    message?: string;
  };
  success: boolean;
}

interface VerifyBodyResponseParams<T> {
  serviceData: ExtendedResponse<T> | Error;
  success: boolean;
}

export function verifyBodyResponse<T>({
  serviceData,
  success,
}: VerifyBodyResponseParams<T>): ResponseServiceData<T> {
  let initialData: ResponseServiceData<T> = {
    status: 500,
    code: null,
    data: {
      message: "An unknown error occurred",
    },
    success: false,
  };

  if (success && serviceData instanceof Response) {
    // Si la solicitud fue exitosa, retornar `data` y `meta`
    return {
      status: serviceData.status,
      code: serviceData.parsedBody?.code || null,
      data: {
        data:
          serviceData.parsedBody?.data ?? ({ ...serviceData.parsedBody } as T),
        meta: serviceData.parsedBody?.meta,
        message: serviceData.parsedBody?.message,
      },
      success: true,
    };
  }

  if (serviceData instanceof Response) {
    // Error de respuesta de la API
    initialData = {
      status: serviceData.status,
      code: serviceData.parsedBody?.code || null,
      data: serviceData.parsedBody || { message: "Error in response data" },
      success: false,
    };
  } else if (serviceData instanceof Error) {
    // Error de conexión u otro error de red
    initialData = {
      status: "NETWORK_ERROR",
      code: null,
      data: {
        message: serviceData.message || "Network error",
      },
      success: false,
    };
  }

  return { ...initialData, success: false };
}
