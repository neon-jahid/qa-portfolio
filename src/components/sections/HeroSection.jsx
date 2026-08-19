import Container from '../common/Container';
import { SECTION_PADDING } from '../common/Section';
import HeroBackdrop from './hero/HeroBackdrop';
import HeroIntro from './hero/HeroIntro';
import HeroCheckFlow from './hero/HeroCheckFlow';
import HeroDashboard from './hero/HeroDashboard';
import { portfolio } from '../../data/portfolioData';

/* ============================================================================
 * SECTION: HERO (#home)
 *
 * Three columns on xl, stacked below it. Each column is its own file:
 *   hero/HeroBackdrop  — decorative glow + grid
 *   hero/HeroIntro     — name, role, tagline, CTAs, stats
 *   hero/HeroCheckFlow — the animated QA-check flow line
 *   hero/HeroDashboard — strengths bars + tool chips
 *
 * All copy comes from src/data/portfolioData.js and is passed down as props,
 * so the parts stay presentational.
 * ==========================================================================*/

export default function HeroSection() {
    const { availability, name, role, heroTagline, resumeUrl, stats, heroQuote, heroDashboard, coreStrengths, testingTools, heroChecks } = portfolio;

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
                    tagline={heroTagline}
                    resumeUrl={resumeUrl}
                    stats={stats}
                />

                <HeroCheckFlow checks={heroChecks} />

                <HeroDashboard
                    dashboard={heroDashboard}
                    quote={heroQuote}
                    strengths={coreStrengths}
                    tools={testingTools}
                />
            </Container>
        </section>
    );
}
