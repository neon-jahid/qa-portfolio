import GlowField from '../../backdrop/GlowField';

/* ============================================================================
 * HERO — BACKDROP
 * Local decoration on top of the site-wide PageBackdrop: a warmer pool of
 * accent light behind the hero content, aimed at the dashboard corner.
 *
 * The grid that used to live here is now global (components/backdrop), so this
 * only supplies what the hero adds on top of it.
 * ==========================================================================*/

const HERO_SPOTS = [
    { x: '78%', y: '18%', color: 'var(--color-glow-primary)', spread: '45%' },
    { x: '10%', y: '85%', color: 'var(--color-glow-secondary)', spread: '45%' },
];

export default function HeroBackdrop() {
    return (
        <GlowField
            spots={HERO_SPOTS}
            className='-z-10 opacity-50 dark:opacity-100'
        />
    );
}
