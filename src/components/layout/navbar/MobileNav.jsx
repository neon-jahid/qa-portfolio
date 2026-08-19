import Container from '../../common/Container';
import NavLink from './NavLink';

/* ============================================================================
 * NAVBAR — MOBILE DROP-DOWN (below lg)
 * Rendered only while the menu is open; picking a link closes it.
 * ==========================================================================*/

export default function MobileNav({ items, activeId, onNavigate }) {
    return (
        <div className='border-t border-line bg-nav-solid lg:hidden'>
            <Container className='py-4'>
                <div className='flex flex-col gap-4 text-sm text-body'>
                    {items.map((item) => (
                        <NavLink
                            key={item.href}
                            item={item}
                            isActive={item.href.slice(1) === activeId}
                            onClick={onNavigate}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
