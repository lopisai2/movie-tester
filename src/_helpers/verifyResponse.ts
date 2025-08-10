import { RES_CODES } from "@/_config";
import {
  NotificactionType,
  StatusesInterface,
  VerifyResponseInterface,
} from "@/_interfaces/VerifyResponse.interface";

const commonData = (
  type: NotificactionType,
  message: string | undefined,
  showNotification: boolean,
  logout = false,
  success = true,
  code?: RES_CODES | null
) => ({
  type,
  message,
  code,
  logout,
  success,
  showNotification,
});

//Helper que permite verificar las respuestas obtenidad de los endpoints de topia, recibiendo la data, el codigo de estado, el mensaje a mostrar cuando sea exitosa la verificación
export const verifyResponse = ({
  dataResponse,
  statusResponse,
  code,
  message,
  showToast = true,
  showErrorToast = true,
}: VerifyResponseInterface) => {
  const statuses = (
    showNotification: boolean,
    showErrorNotification: boolean
  ): { [key: string]: StatusesInterface } => ({
    200: { ...commonData("success", message, showNotification) },
    201: { ...commonData("success", message, showNotification) },
    204: { ...commonData("success", message, showNotification) },
    400: {
      ...commonData(
        "warning",
        dataResponse.message,
        showErrorNotification,
        false,
        false,
        code
      ),
    },
    401: {
      ...commonData(
        "warning",
        dataResponse.message,
        showErrorNotification,
        false,
        false,
        code
      ),
    },
    403: {
      ...commonData(
        "warning",
        dataResponse.message,
        showErrorNotification,
        false,
        false,
        code
      ),
    },
    500: {
      ...commonData(
        "error",
        dataResponse.message,
        showErrorNotification,
        false,
        false,
        code
      ),
    },
    523: {
      ...commonData(
        "error",
        dataResponse.message,
        showErrorNotification,
        false,
        false,
        code
      ),
    },
    ECONNABORTED: {
      ...commonData(
        "error",
        "El tiempo de espera de la solicitud se terminó. Intenta de nuevo",
        showErrorNotification,
        false,
        false,
        null
      ),
    },
    ERR_NETWORK: {
      ...commonData(
        "error",
        "No se puedo hacer la conexión al servidor.",
        showErrorNotification,
        false,
        false,
        null
      ),
    },
  });

  const args = statuses(showToast, showErrorToast)[statusResponse];
  let finalData = args;
  if (args.code === RES_CODES.ERR_TOKEN) {
    finalData = { ...args, logout: true };
  }
  if (args.showNotification || args.showErrorNotification) return finalData;
  return finalData;
};

export default verifyResponse;
