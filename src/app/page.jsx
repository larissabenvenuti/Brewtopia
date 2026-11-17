import { About, Featured, Hero, Visit } from "./components";

export default function HomePage() {
  return (
    <main className="main">
      <Hero />
      <Featured />
      <About />
      <Visit />
    </main>
  );
}
