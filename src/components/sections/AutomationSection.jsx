import { useState } from 'react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ArchitecturePanel from './automation/ArchitecturePanel';
import EditorPanel from './automation/EditorPanel';
import useTestRun from './automation/useTestRun';
import { automationSuite as suite } from '../../data/automationSuite';

/* ============================================================================
 * SECTION: AUTOMATION (#automation) — "Automation in Practice"
 *
 * Two cards side by side, both fed from data/automationSuite.js:
 *   automation/ArchitecturePanel — file tree + testing-focus tiles
 *   automation/EditorPanel       — tabs, code, terminal
 *
 * The section holds the two pieces of shared state:
 *   openId — which file the tree and the editor tabs agree is open
 *   run    — the simulated test run (automation/useTestRun)
 * ==========================================================================*/

export default function AutomationSection() {
    const [openId, setOpenId] = useState(suite.files[0].id);
    const openFile = suite.files.find((file) => file.id === openId) ?? suite.files[0];

    const run = useTestRun(suite.run.length);

    return (
        <Section id='automation'>
            <SectionTitle
                eyebrow='Automation'
                title='Automation in Practice'
                description={suite.intro}
            />

            <div className='grid gap-5 lg:grid-cols-2 lg:gap-6'>
                <ArchitecturePanel
                    suite={suite}
                    openId={openId}
                    onOpen={setOpenId}
                />

                <EditorPanel
                    suite={suite}
                    openFile={openFile}
                    onOpen={setOpenId}
                    run={run}
                />
            </div>

            {/* live region so the simulated run is announced rather than silent */}
            <p
                aria-live='polite'
                className='sr-only'>
                {run.running ? 'Running tests' : run.isFinished ? `${suite.summary.passed} passed, ${suite.summary.failed} failed` : ''}
            </p>
        </Section>
    );
}
