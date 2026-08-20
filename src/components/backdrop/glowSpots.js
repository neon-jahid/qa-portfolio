/**
 * Where the ambient light sits. Each spot is `circle at x y` with a colour
 * token and the radius at which it fades out — GlowField turns the list into
 * stacked radial gradients, so re-aiming the light is a data edit.
 *
 * Kept out of GlowField.jsx so that file only exports its component (fast
 * refresh), the same split the section folders use for their icon and guide
 * modules.
 */
export const AMBIENT_SPOTS = [
    { x: '78%', y: '8%', color: 'var(--color-glow-primary)', spread: '42%' },
    { x: '8%', y: '38%', color: 'var(--color-glow-secondary)', spread: '38%' },
    { x: '55%', y: '92%', color: 'var(--color-glow-primary)', spread: '45%' },
];
