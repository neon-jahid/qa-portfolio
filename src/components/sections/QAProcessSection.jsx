import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ProcessGrid from './process/ProcessGrid';
import { qaProcess } from '../../data/qaProcess';

/* ============================================================================
 * SECTION: QA PROCESS (#process) — "How I Approach Quality"
 *
 * The six workflow steps from data/qaProcess.js:
 *   process/ProcessGrid     — timeline rail (phones) / card grid (sm+)
 *   process/ProcessStepCard — one numbered step
 * ==========================================================================*/

export default function QAProcessSection() {
    return (
        <Section
            id='process'
            className='bg-panel'>
            <SectionTitle
                eyebrow='QA Workflow'
                title='How I Approach Quality'
                description='A clear testing workflow that helps reduce release risk, improve team communication, and keep defects traceable from discovery to closure.'
            />

            <ProcessGrid steps={qaProcess} />
        </Section>
    );
}
