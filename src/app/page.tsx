"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
