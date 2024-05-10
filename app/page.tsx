import Navbar from "@/app/_components/ui/navbar";

import Hero from "@/app/_components/ui/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <Hero />
      </section>
      <section>
        <h1>Hello World</h1>
      </section>
    </main>
  );
}
