/* ============================================================================
 * EXPERTISE — TAG ROW
 * Shared by the mobile drop-down detail and the lg+ sticky detail box, so both
 * always render tags the same way.
 * ==========================================================================*/

export default function ExpertiseTags({ tags, tone }) {
    return (
        <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
                <span
                    key={tag}
                    className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium ${tone.chip}`}>
                    {tag}
                </span>
            ))}
        </div>
    );
}
