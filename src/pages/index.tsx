import Head from "next/head";
import { StartupProgress } from "~/components/StartupProgress";

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

          <StartupProgress />
        </div>
      </main>
    </>
  );
}
