import NavLink from './NavLink';

/* ============================================================================
 * NAVBAR — DESKTOP LINK ROW (lg and up)
 * ==========================================================================*/

export default function DesktopNav({ items, activeId }) {
    return (
        <div className='hidden gap-6 text-sm text-body lg:flex'>
            {items.map((item) => (
                <NavLink
                    key={item.href}
                    item={item}
                    isActive={item.href.slice(1) === activeId}
                    underline
                    className='relative py-1'
                />
            ))}
        </div>
    );
}
