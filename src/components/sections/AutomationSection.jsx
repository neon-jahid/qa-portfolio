import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Pill from '../common/Pill';
import { portfolio } from '../../data/portfolioData';

const KIND_COLOR = {
    folder: 'text-syntax-folder',
    spec: 'text-syntax-spec',
    file: 'text-syntax-file',
};

/**
 * Turn a flat [{ name, depth }] list into tree guides.
 * A node gets └─ when nothing follows it at the same depth before the
 * branch closes (i.e. before a shallower node appears), otherwise ├─.
 */
function withGuides(nodes) {
    const hasLaterSibling = (depth, from) => {
        for (let i = from; i < nodes.length; i++) {
            if (nodes[i].depth < depth) return false;
            if (nodes[i].depth === depth) return true;
        }
        return false;
    };

    return nodes.map((node, i) => {
        let guide = '';
        for (let d = 1; d < node.depth; d++) {
            guide += hasLaterSibling(d, i + 1) ? '│  ' : '   ';
        }
        if (node.depth > 0) guide += hasLaterSibling(node.depth, i + 1) ? '├─ ' : '└─ ';

        return { ...node, guide };
    });
}

export default function AutomationSection() {
    const { automationEditor: editor, automationFocus } = portfolio;

    // One entry per rendered line so the gutter numbering stays honest,
    // blank spacer lines included.
    const lines = [
        <span className='text-syntax-comment'>{editor.comment}</span>,
        null,
        ...withGuides(editor.tree).map((node) => (
            <>
                <span className='text-syntax-punct'>{node.guide}</span>
                <span className={KIND_COLOR[node.kind]}>{node.name}</span>
            </>
        )),
        null,
        <span className='text-syntax-key'>{editor.focusLabel}</span>,
        ...editor.focus.map((item) => (
            <>
                <span className='text-syntax-punct'>- </span>
                <span className='text-syntax-string'>{item}</span>
            </>
        )),
    ];

    return (
        <Section id='automation'>
            <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
                <div>
                    <SectionTitle
                        eyebrow='Automation'
                        title='Playwright Automation Focus'
                        description='I use automation to support repeatable regression checks, high-risk flows, authentication scenarios, and faster release validation.'
                    />
                    <div className='rounded-3xl border border-line bg-slab p-4 sm:p-6'>
                        <h3 className='mb-4 text-xl font-bold text-heading'>Automation Areas</h3>
                        <div className='flex flex-wrap gap-2'>
                            {automationFocus.map((item) => (
                                <Pill key={item}>{item}</Pill>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Editor window */}
                <div className='rounded-[2rem] border border-line bg-card p-2 sm:p-3'>
                    <div className='overflow-hidden rounded-3xl border border-hairline bg-code'>
                        {/* Title bar */}
                        <div className='flex items-center gap-2 border-b border-hairline bg-chrome px-4 py-3'>
                            <span className='h-3 w-3 shrink-0 rounded-full bg-[#ff5f57]' />
                            <span className='h-3 w-3 shrink-0 rounded-full bg-[#febc2e]' />
                            <span className='h-3 w-3 shrink-0 rounded-full bg-[#28c840]' />
                            <span className='ml-3 truncate font-mono text-xs text-muted'>{editor.fileName}</span>
                        </div>

                        {/* Code */}
                        <div className='overflow-x-auto p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm sm:leading-7'>
                            <ol>
                                {lines.map((line, i) => (
                                    <li
                                        key={i}
                                        className='flex gap-4 whitespace-pre'>
                                        <span
                                            aria-hidden='true'
                                            className='w-5 shrink-0 select-none text-right text-gutter'>
                                            {i + 1}
                                        </span>
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
