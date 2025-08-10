import { RES_CODES } from "@/_config";

export type NotificactionType = "success" | "info" | "error" | "warning";
export type StatusResponseType =
  | 200
  | 201
  | 204
  | 400
  | 401
  | 403
  | 500
  | "ECONNABORTED"
  | "ERR_NETWORK";

export interface DataResponseInitial {
  message?: string;
}

export interface DataResponseFull extends DataResponseInitial {
  [key: string]: string | StatusResponseType | RES_CODES | null | object | undefined | number | boolean;
}

export interface VerifyResponseInterface {
  dataResponse: DataResponseFull;
  statusResponse: StatusResponseType;
  code: RES_CODES | null;
  message?: string;
  showToast?: boolean;
  showErrorToast?: boolean;
}

export interface StatusesInterface {
  type: NotificactionType;
  message?: string;
  code: RES_CODES | null | undefined;
  logout?: boolean;
  success: boolean;
  showNotification?: boolean;
  showErrorNotification?: boolean;
}

export interface ServiceData {
  code?: "ERR_NETWORK" | "ECONNABORTED";
  message?: string;
  data: {
    status: StatusResponseType;
    data: object | object[];
  };
  //Se define como es la respuesta de error de parte del servidor
  response?: {
    status: StatusResponseType;
    data: {
      status: StatusResponseType;
      message: string;
      code: RES_CODES | null;
    };
  };
  request?: object;
}


export interface ResponseServiceData {
  status: StatusResponseType;
  success: boolean;
  code: RES_CODES | null;
  data: DataResponseFull;
  recentData?: boolean
}