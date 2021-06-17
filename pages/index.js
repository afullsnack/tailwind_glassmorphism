import Head from "next/head";

export default function Home() {
  return (
    <div className="container backdrop-saturate-50 bg-gray-800">
      <Head>
        <title>Glassmorphic App with Tailwindcss</title>
        <meta name="description" content="Glassmorphic App with Tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-green-100">Hello Tailwindcss</p>
    </div>
  );
}
