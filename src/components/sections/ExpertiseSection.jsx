import { useState } from 'react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ExpertiseList from './expertise/ExpertiseList';
import ExpertiseDetail from './expertise/ExpertiseDetail';
import { toneAt } from '../../lib/tones';
import { expertise } from '../../data/expertise';

/* ============================================================================
 * SECTION: EXPERTISE (#expertise) — "What I Do Best"
 *
 * A master/detail pair sharing one piece of state, the active index:
 *   expertise/ExpertiseList   — the numbered categories (hover / click / focus)
 *   expertise/ExpertiseDetail — the sticky detail box, lg and up
 * Below lg the detail drops open inside the row itself (see ExpertiseRow).
 * ==========================================================================*/

export default function ExpertiseSection() {
    const [active, setActive] = useState(0);

    return (
        <Section id='expertise'>
            <SectionTitle
                eyebrow='Expertise'
                title='What I Do Best'
                description='A practical QA toolkit covering manual testing, automation, APIs, and the documentation that keeps a release traceable from requirement to sign-off.'
            />

            <div className='grid gap-8 lg:grid-cols-2 lg:gap-14'>
                <ExpertiseList
                    items={expertise}
                    activeIndex={active}
                    onSelect={setActive}
                />

                <ExpertiseDetail
                    item={expertise[active]}
                    index={active}
                    tone={toneAt(active)}
                />
            </div>
        </Section>
    );
}
