import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
