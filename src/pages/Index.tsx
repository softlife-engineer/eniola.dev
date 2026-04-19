import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eniola Abonde - Front-end/ Mobile App Engineer | Portfolio</title>
        <meta
          name="description"
          content="Frontend engineer specializing in React, TypeScript, and modern web technologies. Building sleek and performant web applications."
        />
        <meta name="author" content="Eniola Abonde" />
        <meta
          name="keywords"
          content="frontend developer, react, typescript, node.js, web developer, software engineer"
        />
        
        <meta property="og:title" content="Eniola Abonde - Front-end/ Mobile App Engineer " />
        <meta
          property="og:description"
          content="Building sleek and performant web applications with React, TypeScript, and Next.js"
        />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eniola Abonde - Front-end/ Mobile App Engineer" />
        <meta
          name="twitter:description"
          content="Building sleek and performant web applications"
        />
        
        <link rel="canonical" href="eniola.dev" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
