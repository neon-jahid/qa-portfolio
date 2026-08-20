import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import SkillGroupCard from './skills/SkillGroupCard';
import { toneAt } from '../../lib/tones';
import { skills } from '../../data/skills';

/* ============================================================================
 * SECTION: SKILLS (#skills) — "Tools & Tech Stack"
 *
 * A responsive grid of group cards, one per key in data/skills.js:
 *   skills/SkillGroupCard   — the card (icon tile + pills)
 *   skills/skillGroupIcons  — group name → lucide icon
 * ==========================================================================*/

export default function SkillsSection() {
    return (
        <Section id='skills'>
            <SectionTitle
                eyebrow='Toolkit'
                title='Tools & Tech Stack'
                description='The tools I test with and the stack I test against — from Playwright and Postman through to the React, Next.js, and CMS-driven platforms under test.'
            />

            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {Object.entries(skills).map(([group, items], i) => (
                    <SkillGroupCard
                        key={group}
                        group={group}
                        items={items}
                        tone={toneAt(i)}
                        index={i}
                    />
                ))}
            </div>
        </Section>
    );
}
