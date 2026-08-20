import GlowField from './GlowField';
import GridLayer from './GridLayer';
import ScanBeam from './ScanBeam';

/* ============================================================================
 * PAGE BACKDROP
 * The site-wide background, rendered once by layouts/MainLayout.jsx and pinned
 * to the viewport (`fixed`) so the page scrolls over it instead of dragging it
 * along. Every layer is decorative: pointer-events-none, aria-hidden, -z-10.
 *
 * The look is a QA bench: a ruled blueprint grid (the test matrix), ambient
 * accent light, and hairline beams sweeping down it like a suite working
 * through its cases. All four layers are tokenised, so light and dark are
 * handled by the variables in src/index.css and nothing here needs `dark:`.
 *
 * Sections must stay transparent for this to show — none of them may set an
 * opaque `bg-page`. Section-local decoration builds on the same primitives
 * (see sections/hero/HeroBackdrop.jsx) rather than re-inventing them.
 * ==========================================================================*/

/* Fades the grid out at the edges so it never collides with the navbar or footer rules */
const GRID_MASK = 'radial-gradient(ellipse 115% 85% at 50% 32%, black 42%, transparent 100%)';

export default function PageBackdrop() {
    return (
        <div
            aria-hidden='true'
            className='pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-page'>
            <GlowField className='opacity-70 dark:opacity-100' />

            <GridLayer
                cell={28}
                boldEvery={4}
                style={{ maskImage: GRID_MASK, WebkitMaskImage: GRID_MASK }}
            />

            {/* Two passes, offset so they never sweep in lockstep */}
            <ScanBeam
                duration={19}
                delay={0}
            />
            <ScanBeam
                duration={26}
                delay={9}
                className='opacity-60'
            />

            {/* Vignette — pulls the corners back down so body copy keeps its contrast */}
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage:
                        'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, color-mix(in srgb, var(--color-page) 75%, transparent) 100%)',
                }}
            />
        </div>
    );
}
