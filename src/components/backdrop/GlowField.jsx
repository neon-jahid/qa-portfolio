import { AMBIENT_SPOTS } from './glowSpots';

/* ============================================================================
 * BACKDROP — GLOW FIELD
 * Ambient radial washes that keep the flat page from reading as dead space.
 *
 * `spots` is data, not markup, so a caller can re-aim the light without
 * touching this file (defaults in ./glowSpots.js):
 *   <GlowField spots={[{ x: '50%', y: '0%', color: 'var(--color-glow-primary)', spread: '40%' }]} />
 * ==========================================================================*/

export default function GlowField({ spots = AMBIENT_SPOTS, className = '', style }) {
    return (
        <div
            aria-hidden='true'
            className={`pointer-events-none absolute inset-0 ${className}`}
            style={{
                backgroundImage: spots
                    .map((spot) => `radial-gradient(circle at ${spot.x} ${spot.y}, ${spot.color}, transparent ${spot.spread})`)
                    .join(','),
                ...style,
            }}
        />
    );
}
