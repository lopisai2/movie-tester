/* eslint-disable */
export interface OnFailedSubmitI {
  error: { [key: string]: any }
  formName: string
  delay?: number
}
/* eslint-enable */


export const onFailedSubmit = ({
  errors,
  formName,
  delay = 50,
}: {
  errors: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  formName: string;
  delay?: number;
}) => {
  // Encontrar la primera clave con error
  const firstErrorField = Object.keys(errors).find((field) => errors[field] !== null);

  if (firstErrorField) {
    setTimeout(() => {
      // Construir el ID del elemento basado en el nombre del formulario y el campo con error
      const element = document.getElementById(`${formName}_${firstErrorField}`);
      if (element && element.scrollIntoView) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }, delay);
  }
};
