import Container from "./Container";
import Reveal from "./Reveal";

export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}
