import { Nav, Hero, Skills, Experience, About, Projects, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <div className="bg-white scroll-smooth">
      <Nav/>
      <Hero/>
      <Skills/>
      <Experience/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
