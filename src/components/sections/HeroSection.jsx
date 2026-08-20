import Container from '../common/Container';
import { SECTION_PADDING } from '../common/Section';
import HeroBackdrop from './hero/HeroBackdrop';
import HeroIntro from './hero/HeroIntro';
import HeroCheckFlow from './hero/HeroCheckFlow';
import HeroDashboard from './hero/HeroDashboard';
import { hero } from '../../data/hero';
import { profile } from '../../data/profile';

/* ============================================================================
 * SECTION: HERO (#home)
 *
 * Three columns on xl, stacked below it. Each column is its own file:
 *   hero/HeroBackdrop  — decorative glow + grid
 *   hero/HeroIntro     — name, role, tagline, CTAs, stats
 *   hero/HeroCheckFlow — the animated QA-check flow line
 *   hero/HeroDashboard — strengths bars + tool chips
 *
 * Copy comes from data/hero.js (plus the name and role in data/profile.js)
 * and is passed down as props,
 * so the parts stay presentational.
 * ==========================================================================*/

export default function HeroSection() {
    const { name, role, resumeUrl } = profile;
    const { availability, tagline, quote, stats, dashboard, coreStrengths, testingTools, checks } = hero;

    return (
        <section
            id='home'
            className={`relative overflow-hidden bg-page ${SECTION_PADDING}`}>
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
    );
}
