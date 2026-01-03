import Hero from "../sections/Hero";
import About from "../sections/About";
import SelectedWork from "../sections/SelectedWork";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWork />
      <Contact />
    </main>
  );
}
