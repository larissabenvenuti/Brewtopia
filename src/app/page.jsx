import About from "./components/About";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Visit from "./components/Visit";
import './styles/globals.css';

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
