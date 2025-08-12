import { MetaDataCommonProps } from "@/_interfaces/Metadata.interface";
import { getMovies } from "@/_services/movies/GET/getMovies";
import { Metadata } from "next";
import { MoviesHomeHero } from "./_components/MoviesHomeHero/MoviesHomeHero";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  //Obtener la metadata de la página desde strapi según el idioma
  return {
    title: `Inicio | Movie Tester (${(await params).lang})`,
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

export default async function Home({}: MetaDataCommonProps) {
  const [mainMovies, featuredMovies] = await Promise.all([
    getMovies({
      s: "Avengers",
    }),
    getMovies({
      s: "Ace",
    }),
  ]);
  return (
    <>
      <section className='public-section-wrapper'>
        <MoviesHomeHero
          movies={mainMovies.data?.Search ?? []}
          featuredMovies={featuredMovies.data?.Search ?? []}
        />
      </section>
    </>
  );
}
