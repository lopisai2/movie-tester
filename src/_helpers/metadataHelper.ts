import { MetaDataCommonProps } from "@/_interfaces/Metadata.interface";
import { Metadata, ResolvingMetadata } from "next";

/**
 * Permite obtener datos de metadata de parametros o para hacer peticiones asincronas que requieren cambiar el nombre de la página
 * @param common Propiedades comunes de metadata
 * @param parent Objeto que contiene la metadata de la página anterior
 * @returns 
 */
export async function generateMetadata(
  { params }: MetaDataCommonProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  //Obtener datos de la página anterior
  const previousDescription = (await parent).description || "";
  const title = `Movie Tester (${(await params).lang})`;

  return {
    title,
    description: "Aplicación para gestionar presupuestos de forma interactiva",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: "",
      title: "Admin Topia",
      description: previousDescription,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Topia",
        },
      ],
    },
  };
}
