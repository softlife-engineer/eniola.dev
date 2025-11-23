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
        <title>Sheriff Oladimeji - Full-Stack Engineer | Portfolio</title>
        <meta
          name="description"
          content="Full-stack engineer specializing in React, TypeScript, Node.js, and modern web technologies. Building sleek and performant web applications."
        />
        <meta name="author" content="Sheriff Oladimeji" />
        <meta
          name="keywords"
          content="full-stack developer, react, typescript, node.js, web developer, software engineer"
        />
        
        <meta property="og:title" content="Sheriff Oladimeji - Full-Stack Engineer" />
        <meta
          property="og:description"
          content="Building sleek and performant web applications with React, TypeScript, and Node.js"
        />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sheriff Oladimeji - Full-Stack Engineer" />
        <meta
          name="twitter:description"
          content="Building sleek and performant web applications"
        />
        
        <link rel="canonical" href="https://sherifoladimeji.com" />
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
