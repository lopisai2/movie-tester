import { MetaDataCommonProps } from "@/_interfaces/Metadata.interface";
import { getMovie } from "@/_services/movies/GET/getMovie";
import { Metadata } from "next";
import Image from "next/image";
import MovieDetail from "./_components/MovieDetail";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> => {
  const movie = await getMovie({
    i: (await params).id,
  });
  return {
    title: `${movie?.data?.Title} | Movie Tester`,
    description: movie?.data?.Plot,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: "",
      title: `${movie?.data?.Title} | Movie Tester`,
      description: movie?.data?.Plot,
      images: [
        {
          url: movie?.data?.Poster ?? "",
          width: 1200,
          height: 630,
          alt: `Movie Tester - ${movie?.data?.Title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${movie?.data?.Title} | Movie Tester`,
      description: movie?.data?.Plot,
      images: [
        {
          url: movie?.data?.Poster ?? "",
          width: 1200,
          height: 630,
          alt: `Movie Tester - ${movie?.data?.Title}`,
        },
      ],
      site: "@MovieTester",
    },
  };
};

export default async function MoviePage({ params }: MetaDataCommonProps) {
  const { id } = await params;
  const { data } = await getMovie({
    i: id,
  });

  return (
    <>
      <section>
        <MovieDetail movieData={data} />
      </section>
    </>
  );
}
