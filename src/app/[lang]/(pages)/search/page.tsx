import SearchPageClient from "./SearchPageClient";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  //Obtener la metadata de la página desde strapi según el idioma
  return {
    title: `Resultados de la búsqueda | Movie Tester (${(await params).lang})`,
    description:
      "Web de acceso libre para buscar peliculas y series facilmente.",
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
      description: "Movie Tester",
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
      title: "Movie Tester Web",
      description: "Movie Tester",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Movie Tester",
        },
      ],
      site: "@MovieTester",
    },
  };
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

const SearchPage = () => {
  return <SearchPageClient />;
};

export default SearchPage;
