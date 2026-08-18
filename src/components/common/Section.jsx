import Container from './Container';
import Reveal from './Reveal';

/**
 * Single source of truth for the vertical rhythm between sections. Hero and
 * Contact build their own <section> (custom layout / width) so they import
 * this rather than re-declaring the scale — that is how the three drifted apart.
 */
export const SECTION_PADDING = 'py-12 md:py-16 lg:py-20';

export default function Section({ id, children, className = '' }) {
    return (
        <section
            id={id}
            className={`${SECTION_PADDING} ${className}`}>
            <Container>
                <Reveal>{children}</Reveal>
            </Container>
        </section>
    );
}
