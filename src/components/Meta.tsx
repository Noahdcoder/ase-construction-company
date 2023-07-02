import Head from "next/head";
import { useRouter } from "next/router";

type metaProps = {
  title: string;
  description: string;
};

export default function Meta({ title, description }: metaProps) {
  const router = useRouter();
  const currentUrl = `https://aseconstructioncompanylimited.com
    ${router.asPath}`;
  return (
    <Head>
      <title>{`ASE Construction Company Limited - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="title"
        content={`ASE Construction Company Limited - ${title}`}
      />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Building,Renovation,Construction,Contractor,Remodeling,Construction Services,Residential Construction,Commercial Construction,Construction Company,Construction Projects,Construction Management,General Contractor,Construction Solutions,Construction Industry,Construction Professionals"
      />
      <meta
        property="og:title"
        content={`ASE Construction Company Limited - ${title}`}
      />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta
        property="twitter:title"
        content={`ASE Construction Company Limited - ${title}`}
      />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://aseconstructioncompanylimited.com/ase-icon-color.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content="https://aseconstructioncompanylimited.com/aoc-logo-color.png"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
