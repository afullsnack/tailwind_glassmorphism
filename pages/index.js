import Head from "next/head";

export default function Home() {
  return (
    <div className="container-full h-screen w-screen backdrop-saturate-50 flex items-center justify-center bg-gradient-to-br from-purple-700 to-green-500">
      <Head>
        <title>Glassmorphic App with Tailwindcss</title>
        <meta name="description" content="Glassmorphic App with Tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="px-5 py-5 grid grid-cols-2 grid-rows-4 justify-center relative z-10 
        bg-black border-black border-solid border-2 border-opacity-20 w-1/3 
        bg-opacity-5 h-80 rounded-xl shadow-md card"
      >
        <h1 className="text-4xl text-center col-span-2 font-mono font-bold">
          Glassmorphic Power
        </h1>
      </div>
      <div className="rounded-full h-40 w-40 absolute top-24 right-1/4 bg-green-600 z-0"></div>
      <div className="rounded-full h-20 w-20 absolute bottom-36 left-96 bg-gradient-to-br from-white to-transparent z-0"></div>
      <div className="rounded-full h-60 w-60 absolute top-1/2 right-1/4 bg-gradient-to-br from-red-400 to-red-600 z-1"></div>
    </div>
  );
}
