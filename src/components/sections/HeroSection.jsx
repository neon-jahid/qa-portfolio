import Container from '../common/Container';
import { SECTION_PADDING } from '../common/Section';
import HeroBackdrop from './hero/HeroBackdrop';
import HeroIntro from './hero/HeroIntro';
import HeroCheckFlow from './hero/HeroCheckFlow';
import HeroDashboard from './hero/HeroDashboard';
import ToolTicker from '../common/ToolTicker';
import { hero } from '../../data/hero';
import { profile } from '../../data/profile';
import { toolTicker } from '../../data/toolTicker';

/* ============================================================================
 * SECTION: HERO (#home)
 *
 * Three columns on xl, stacked below it. Each column is its own file:
 *   hero/HeroBackdrop  — decorative glow local to the hero
 *   hero/HeroIntro     — name, role, tagline, CTAs, stats
 *   hero/HeroCheckFlow — the animated QA-check flow line
 *   hero/HeroDashboard — strengths bars + tool chips
 *
 * The grid behind all of it is now the site-wide backdrop (components/backdrop,
 * rendered by MainLayout), which is why this section sets no background of its
 * own. The scrolling tool strip sits outside the <section> so it can run edge
 * to edge under it: words in data/toolTicker.js, motion in common/Marquee.jsx.
 *
 * Copy comes from data/hero.js (plus the name and role in data/profile.js)
 * and is passed down as props,
 * so the parts stay presentational.
 * ==========================================================================*/

export default function HeroSection() {
    const { name, role, resumeUrl } = profile;
    const { availability, tagline, quote, stats, dashboard, coreStrengths, testingTools, checks } = hero;

    return (
        <>
            <section
                id='home'
                className={`relative overflow-hidden ${SECTION_PADDING}`}>
                <HeroBackdrop />

                {/* xl:items-stretch — with items-center each column sized to its own
                    content, so the intro and dashboard ended up different heights */}
                <Container className='grid grid-cols-1 gap-10 md:gap-12 xl:grid-cols-[1fr_190px_1.05fr] xl:items-stretch xl:gap-8'>
                    <HeroIntro
                        availability={availability}
                        name={name}
                        role={role}
                        tagline={tagline}
                        resumeUrl={resumeUrl}
                        stats={stats}
                    />

                    <HeroCheckFlow checks={checks} />

                    <HeroDashboard
                        dashboard={dashboard}
                        quote={quote}
                        strengths={coreStrengths}
                        tools={testingTools}
                    />
                </Container>
            </section>

            <ToolTicker items={toolTicker} />
        </>
    );
}
