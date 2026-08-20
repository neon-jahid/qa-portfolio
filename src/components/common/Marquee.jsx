/* ============================================================================
 * MARQUEE
 * Generic horizontal ticker. It renders `children` twice side by side and
 * slides the track exactly -50%, so the second copy lands where the first
 * started and the loop is seamless — which is why the keyframes in
 * src/index.css are written in percentages, not pixels.
 *
 *   <Marquee duration={38} direction='left'>{items}</Marquee>
 *
 * Props
 *   duration     seconds for one full pass — bigger is slower
 *   direction    'left' | 'right'
 *   pauseOnHover stops the track while the pointer is over it
 *   fade         soft mask at both ends so items enter/leave instead of cutting
 *   gapClassName spacing between items inside one copy
 *
 * The animation name/state are Tailwind classes rather than inline style, so
 * the hover and reduced-motion variants can still win; only the duration is
 * inline, since that is the one value callers change.
 * ==========================================================================*/

const FADE_MASK = '[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]';

export default function Marquee({
    children,
    duration = 40,
    direction = 'left',
    pauseOnHover = true,
    fade = true,
    gapClassName = 'gap-10 sm:gap-14',
    className = '',
}) {
    const animationName = direction === 'right' ? '[animation-name:marquee-right]' : '[animation-name:marquee-left]';

    return (
        <div className={`group relative overflow-hidden ${fade ? FADE_MASK : ''} ${className}`}>
            <div
                className={`flex w-max ${animationName} [animation-duration:var(--marquee-duration)] [animation-iteration-count:infinite] [animation-timing-function:linear] motion-reduce:[animation-play-state:paused] ${
                    pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
                }`}
                style={{ '--marquee-duration': `${duration}s` }}>
                {/* Copy 2 is decorative duplication — hidden from the a11y tree */}
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        aria-hidden={copy === 1 || undefined}
                        className={`flex shrink-0 items-center ${gapClassName} pr-10 sm:pr-14`}>
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}
