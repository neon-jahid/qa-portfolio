import Container from "./Container";

export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
