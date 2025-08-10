import { MetaDataCommonProps } from "@/_interfaces/Metadata.interface";
//import HomePremiumExperience from "./_components/HomePremiumExperience/HomePremiumExperience";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  //Obtener la metadata de la página desde strapi según el idioma
  return {
    title: `Movie Tester - Lista de peliculas guardadas (${
      (await params).lang
    })`,
    description:
      "Servicios para condominio, residenciales y centros comerciales.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: "",
      title: "Movie Tester Web",
      description: "Web de la gran Movie Tester",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Movie Tester",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Topia Web",
      description: "Web de la gran Topia",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Topia",
        },
      ],
      site: "@TopiaWeb",
    },
  };
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function MoviePage({}: MetaDataCommonProps) {
  return (
    <>
      <section>
        <h1>Hola</h1>
      </section>
    </>
  );
}
