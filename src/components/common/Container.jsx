/* ============================================================================
 * CONTAINER
 * The one place the page width and side padding are defined. Every section
 * renders through it, so changing max-w here re-aligns the whole site.
 * ==========================================================================*/

export default function Container({ children, className = '' }) {
    return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
