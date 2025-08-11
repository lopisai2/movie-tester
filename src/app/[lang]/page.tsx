import { MetaDataCommonProps } from "@/_interfaces/Metadata.interface";
import { getMovies } from "@/_services/movies/GET/getMovies";
//import HomePremiumExperience from "./_components/HomePremiumExperience/HomePremiumExperience";
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  //Obtener la metadata de la página desde strapi según el idioma
  return {
    title: `Topia (${(await params).lang})`,
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
        <h1>Movie Tester</h1>
        {mainMovies.data?.Search?.map((movie, index) => (
          <div key={index}>
            <span>{movie.Title}</span>
            <Link href={`/movie/${movie.imdbID}`}>Ver detalles</Link>
          </div>
        ))}

        {featuredMovies.data?.Search?.map((movie, index) => (
          <div key={index}>
            <span>{movie.Title}</span>
            <Link href={`/movie/${movie.imdbID}`}>Ver detalles</Link>
          </div>
        ))}
      </section>
    </>
  );
}
