import useInView from '../../hooks/useInView';

/**
 * Fades + lifts its children in the first time they scroll into view.
 * `delay` staggers siblings (ms). Respects prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
    const { ref, inView } = useInView();

    return (
        <div
            ref={ref}
            style={inView && delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } ${className}`}>
            {children}
        </div>
    );
}
