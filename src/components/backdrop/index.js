/* ============================================================================
 * BACKDROP — barrel.
 *
 *   PageBackdrop — the composed site-wide background (MainLayout renders it)
 *   GlowField    — ambient radial washes, aimed by a `spots` array (glowSpots.js)
 *   GridLayer    — two-scale blueprint grid
 *   ScanBeam     — sweeping hairline of accent light
 *
 * Import the primitives when a section wants its own local decoration; import
 * PageBackdrop only once, from the layout.
 * ==========================================================================*/

export { default as PageBackdrop } from './PageBackdrop';
export { default as GlowField } from './GlowField';
export { AMBIENT_SPOTS } from './glowSpots';
export { default as GridLayer } from './GridLayer';
export { default as ScanBeam } from './ScanBeam';
