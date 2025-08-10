export const formatSeparatorNumber = ({ number }: { number: number }) => {
  if (typeof number !== "number") {
    throw new TypeError("El argumento debe ser un número.");
  }

  // Usamos toLocaleString con el idioma en-US para aplicar el formato correcto
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
