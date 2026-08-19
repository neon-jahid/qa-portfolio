/* ============================================================================
 * Small formatting helpers shared across sections.
 * ==========================================================================*/

/** 0 -> "01", 9 -> "10". Used for the numbered lists (expertise, process, projects). */
export const twoDigit = (index) => String(index + 1).padStart(2, '0');
