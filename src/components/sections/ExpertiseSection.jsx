import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { portfolio } from '../../data/portfolioData';

const num = (i) => String(i + 1).padStart(2, '0');

function Tags({ tags }) {
    return (
        <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
                <span
                    key={tag}
                    className='whitespace-nowrap rounded-full border border-accent-line bg-accent-tint px-3 py-1 text-xs font-medium text-accent'>
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default function ExpertiseSection() {
    const [active, setActive] = useState(0);
    const { expertise } = portfolio;
    const activeItem = expertise[active];
    const ActiveIcon = activeItem.icon;

    return (
        <Section id='expertise'>
            <SectionTitle
                eyebrow='Expertise'
                title='What I Do Best'
                description='A practical QA toolkit covering manual testing, automation, APIs, and the documentation that keeps a release traceable from requirement to sign-off.'
            />

            <div className='grid gap-8 lg:grid-cols-2 lg:gap-14'>
                {/* ---------- Left: category list ---------- */}
                <div className='border-t border-line'>
                    {expertise.map((item, i) => {
                        const isActive = i === active;
                        const select = () => setActive(i);
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className='border-b border-line'>
                                <button
                                    type='button'
                                    onMouseEnter={select}
                                    onFocus={select}
                                    onClick={select}
                                    aria-current={isActive || undefined}
                                    aria-controls={`expertise-panel-${i}`}
                                    aria-expanded={isActive}
                                    className='group flex w-full cursor-pointer items-center gap-3 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong sm:gap-5'>
                                    <span className={`font-mono text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-accent' : 'text-faint'}`}>{num(i)}</span>

                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                                            isActive ? 'border-accent-line bg-accent-tint text-accent' : 'border-hairline bg-tile text-muted group-hover:text-accent'
                                        }`}>
                                        <Icon size={17} />
                                    </span>

                                    <span
                                        className={`min-w-0 flex-1 text-base font-bold tracking-tight transition-colors duration-300 sm:text-lg lg:text-xl ${
                                            isActive ? 'text-accent' : 'text-heading group-hover:text-accent'
                                        }`}>
                                        {item.title}
                                    </span>

                                    {/* decorative only — dropped on small screens to buy title width */}
                                    <ArrowRight
                                        size={20}
                                        aria-hidden='true'
                                        className={`hidden shrink-0 text-accent transition-all duration-300 sm:block ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
                                    />
                                </button>

                                {/* Below lg there is no hover, so the detail drops in place instead */}
                                <div
                                    id={`expertise-panel-${i}`}
                                    className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                    <div className='overflow-hidden'>
                                        {/* indented to line up with the row's icon tile */}
                                        <div className='flex flex-col gap-4 pb-6 pl-10'>
                                            <p className='leading-7 text-body'>{item.description}</p>
                                            <Tags tags={item.tags} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ---------- Right: detail box (lg+) ---------- */}
                {/* Wrapper stretches to the list's height; the box inside sticks while you
                    move down the list. min-h is sized past the longest entry so the box
                    never resizes between hovers. */}
                <div className='hidden lg:block'>
                    <div className='sticky top-24 rounded-3xl border border-line bg-card p-8 lg:min-h-[28rem] xl:p-10'>
                        {/* key remounts the node so the entrance animation replays on every swap */}
                        <div
                            key={active}
                            className='flex animate-[detail-in_0.35s_ease-out] flex-col gap-6 motion-reduce:animate-none'>
                            <div className='flex items-center gap-4'>
                                <span className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-line bg-accent-tint text-accent'>
                                    <ActiveIcon size={26} />
                                </span>
                                <span className='font-mono text-sm font-semibold text-accent'>{num(active)}</span>
                            </div>

                            <h3 className='text-3xl font-bold tracking-tight text-heading'>{activeItem.title}</h3>

                            <p className='text-lg leading-8 text-body'>{activeItem.description}</p>

                            <Tags tags={activeItem.tags} />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
