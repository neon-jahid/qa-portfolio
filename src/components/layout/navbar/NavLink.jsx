/* ============================================================================
 * NAVBAR — ONE LINK
 * Shared by the desktop row and the mobile menu so "active" always looks and
 * announces the same. The sliding underline is desktop-only (`underline`).
 * ==========================================================================*/

export default function NavLink({ item, isActive, underline = false, onClick, className = '' }) {
    return (
        <a
            href={item.href}
            onClick={onClick}
            aria-current={isActive ? 'true' : undefined}
            className={`transition-colors duration-300 hover:text-accent ${isActive ? 'text-accent' : ''} ${className}`}>
            {item.label}

            {underline && (
                <span
                    aria-hidden='true'
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                />
            )}
        </a>
    );
}
