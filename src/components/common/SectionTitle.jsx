/* ============================================================================
 * SECTION TITLE
 * Eyebrow + heading + optional description. Used by every section so their
 * headers keep the same rhythm and type scale.
 * ==========================================================================*/

export default function SectionTitle({ eyebrow, title, description, center = false }) {
    return (
        <div className={`mb-10 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent-strong'>{eyebrow}</p>
            <h2 className='text-2xl font-bold text-heading sm:text-3xl md:text-4xl'>{title}</h2>
            {description && <p className='mt-4 text-body'>{description}</p>}
        </div>
    );
}
