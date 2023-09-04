import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Startup progress tracker</title>
        <meta
          name="description"
          content="Tracks progress of your startup boost"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            My <span className="text-[hsl(280,100%,70%)]">startup</span>{" "}
            progress
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Phase</h3>
              <div className="text-lg">Tasks</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
