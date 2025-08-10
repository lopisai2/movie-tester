export interface UniqueItemsInterface {
  array: { [key: string]: string | number }[];
  prop: "id";
}

export const uniqueItems = ({
  array = [],
  prop = "id",
}: UniqueItemsInterface) => {
  const uniqueItems: { [key: string]: string | number }[] = [];
  const uniquesIds = new Set();
  array.forEach((item) => {
    if (!item[prop]) {
      uniqueItems.push(item);
    }
    if (item[prop] && !uniquesIds.has(item.id)) {
      uniquesIds.add(item[prop]);
      uniqueItems.push(item);
    }
  });
  return uniqueItems as never[];
};

export const checkDeepObjects = <T extends Record<string, T>>(
  obj1: T,
  obj2: T
): boolean => {
  // Primero, comprueba si son el mismo objeto por referencia o si los valores con la misma clave son iguales.
  if (obj1 === obj2) return true;

  // Si alguno de los dos no es un objeto o es null, no son iguales.
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  // Obtén las claves de ambos objetos.
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Si tienen un número diferente de propiedades, no son iguales.
  if (keys1.length !== keys2.length) return false;

  // Compara las propiedades y sus valores recursivamente.
  for (const key of keys1) {
    // Comprueba si la propiedad existe en el segundo objeto.
    if (!keys2.includes(key)) return false;

    // Llama recursivamente para verificar la igualdad de los valores.
    if (!checkDeepObjects<T>(obj1[key], obj2[key])) return false;
  }

  return true;
};

//Se necesita una función para obtener los filtros en local y
//Se necesita una función para aplanar los datos de strapi un7a vez obtenidos desde su endpoint
export interface FlatternObjectDataI {
  data: { [key: string]: string };
  includedArrays: string[];
  hasImages?: boolean;
}

export const flattenObjectData = ({
  data,
  includedArrays = ["arrayItems"],
  hasImages,
}: FlatternObjectDataI) => {
  const finalData: unknown[] = [];

  const recursiveObjectProccessed = (object: { [key: string]: string }) => {
    Object.keys(object).forEach((key) => {
      const value = object[key];
      //Se verifica si es un arreglo lo que se ha obtenido del objeto y si su clave está incluida
      //en el arreglo pasado a la función, ya que pueden haber más arreglos que no se necesitan recorrer
      if (Array.isArray(value) && includedArrays.includes(key)) {
        value.forEach((item) => {
          const newItem = item;
          if (typeof item === "object" && item) {
            if (hasImages) {
              newItem.image = newItem?.image?.data
                ? {
                    ...newItem?.image?.data?.attributes,
                  }
                : null;
            }
            finalData.push(newItem);
          }
        });
      } else if (typeof value === "object" && value) {
        recursiveObjectProccessed(value);
      }
    });
  };

  if (data && typeof data === "object") {
    recursiveObjectProccessed(data);
  }
  return finalData;
};
