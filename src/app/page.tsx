import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Section
        id="home"
        title=""
        description=""
      >
        <Hero />
      </Section>

      {/* <Logos /> */}
      <Container>
        {/* <Benefits /> */}
        {/* <Section
          id="about"
          title="About"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section> */}

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        {/* <Stats /> */}
        {/* <Section
          id="#cta"
          title=""
          description=""
        >
          <CTA />
        </Section> */}

      </Container>
    </>
  );
};

export default HomePage;
