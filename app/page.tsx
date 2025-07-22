import Contact from "./_components/contact";
import Hero from "./_components/hero";
import Stats from "./_components/stats";

const HomePage = async () => {
  return (
    <>
      <Hero />
      <Stats />
      <Contact />
    </>
  );
};

export default HomePage;
