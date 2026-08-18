import { FileCode2, FileJson2, Folder, FolderOpen, Loader2, Play, RotateCcw, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import CodeBlock from '../common/CodeBlock';
import { portfolio } from '../../data/portfolioData';

const FILE_ICON = { spec: FileCode2, data: FileJson2, file: FileCode2 };
const STEP_MS = 420;

/** ├─ / └─ guides derived from each node's depth (see EditorPanel history). */
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
        for (let d = 1; d < node.depth; d++) guide += hasLaterSibling(d, i + 1) ? '│  ' : '   ';
        if (node.depth > 0) guide += hasLaterSibling(node.depth, i + 1) ? '├─ ' : '└─ ';
        return { ...node, guide };
    });
}

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function AutomationSection() {
    const suite = portfolio.automationSuite;
    const tree = withGuides(suite.tree);

    const [openId, setOpenId] = useState(suite.files[0].id);
    const [activeFocus, setActiveFocus] = useState(0);
    const [revealed, setRevealed] = useState(suite.run.length + 1); // start showing the finished run
    const [running, setRunning] = useState(false);
    const timers = useRef([]);

    const clearTimers = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };
    useEffect(() => clearTimers, []);

    const openFile = suite.files.find((f) => f.id === openId) ?? suite.files[0];
    const total = suite.run.length + 1; // + summary line

    // Always steps through the run — a Re-run button that no-ops is broken, so
    // reduced motion only shortens the interval (the per-line slide is dropped
    // via motion-reduce:animate-none on the lines themselves).
    const runTests = () => {
        clearTimers();
        setRunning(true);
        setRevealed(0);

        const step = reduced() ? 90 : STEP_MS;

        for (let i = 1; i <= total; i++) {
            timers.current.push(
                setTimeout(() => {
                    setRevealed(i);
                    if (i === total) setRunning(false);
                }, i * step),
            );
        }
    };

    return (
        <Section id='automation'>
            <SectionTitle
                eyebrow='Automation'
                title='Automation in Practice'
                description={suite.intro}
            />

            <div className='grid gap-5 lg:grid-cols-2 lg:gap-6'>
                {/* ---------------- Left: architecture ---------------- */}
                <div className='rounded-3xl border border-line bg-card p-5 sm:p-6'>
                    <h3 className='mb-5 text-lg font-bold text-heading'>Architecture &amp; Key Focus</h3>

                    {/* Project structure */}
                    <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent'>{suite.structureLabel}</p>

                    <div className='rounded-2xl border border-hairline bg-inset p-3 font-mono text-xs leading-6'>
                        {tree.map((node) => {
                            const isOpen = node.file === openId;
                            const Icon = node.file ? FILE_ICON[node.kind] ?? FileCode2 : isOpen ? FolderOpen : Folder;

                            const content = (
                                <>
                                    <span className='text-syntax-punct'>{node.guide}</span>
                                    <Icon
                                        size={13}
                                        className={`inline-block shrink-0 ${node.file ? 'text-syntax-spec' : 'text-accent'}`}
                                    />
                                    <span className='ml-1.5'>{node.name}</span>
                                </>
                            );

                            // Only files are clickable — folders are structure, not targets
                            return node.file ? (
                                <button
                                    key={node.name}
                                    type='button'
                                    onClick={() => setOpenId(node.file)}
                                    aria-pressed={isOpen}
                                    className={`flex w-full cursor-pointer items-center whitespace-pre rounded px-1 text-left transition-colors duration-200 hover:bg-accent-tint hover:text-accent ${
                                        isOpen ? 'bg-accent-tint font-semibold text-accent' : 'text-body'
                                    }`}>
                                    {content}
                                </button>
                            ) : (
                                <div
                                    key={node.name}
                                    className='flex items-center whitespace-pre px-1 text-muted'>
                                    {content}
                                </div>
                            );
                        })}
                    </div>

                    {/* Testing focus */}
                    <p className='mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent'>{suite.focusLabel}</p>

                    <div className='grid grid-cols-2 gap-3'>
                        {suite.focus.map((item, i) => {
                            const Icon = item.icon;
                            const isActive = i === activeFocus;

                            return (
                                <button
                                    key={item.label}
                                    type='button'
                                    onMouseEnter={() => setActiveFocus(i)}
                                    onFocus={() => setActiveFocus(i)}
                                    onClick={() => setActiveFocus(i)}
                                    aria-pressed={isActive}
                                    className={`flex cursor-pointer flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${
                                        isActive ? '-translate-y-0.5 border-accent-line bg-accent-tint shadow-lg shadow-accent-tint' : 'border-hairline bg-inset hover:border-accent-line'
                                    }`}>
                                    <Icon
                                        size={20}
                                        className={isActive ? 'text-accent' : 'text-muted'}
                                    />
                                    <span className={`text-xs font-semibold leading-4 ${isActive ? 'text-accent' : 'text-body'}`}>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ---------------- Right: editor + terminal ---------------- */}
                <div className='overflow-hidden rounded-3xl border border-line bg-card p-1.5'>
                    <div className='overflow-hidden rounded-[1.15rem] border border-hairline bg-code'>
                        {/* Tab strip */}
                        <div className='flex items-stretch overflow-x-auto border-b border-hairline bg-chrome'>
                            {suite.files.map((file) => {
                                const isOpen = file.id === openId;

                                return (
                                    <button
                                        key={file.id}
                                        type='button'
                                        onClick={() => setOpenId(file.id)}
                                        aria-pressed={isOpen}
                                        title={file.path}
                                        className={`flex shrink-0 cursor-pointer items-center gap-2 border-r border-hairline px-3 py-2.5 font-mono text-[11px] transition-colors duration-200 ${
                                            isOpen ? 'bg-code text-heading' : 'text-muted hover:text-accent'
                                        }`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? 'bg-accent-strong' : 'bg-transparent'}`} />
                                        {file.name}
                                        {isOpen && (
                                            <X
                                                size={11}
                                                aria-hidden='true'
                                                className='text-gutter'
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Code */}
                        <CodeBlock
                            key={openFile.id}
                            code={openFile.code}
                            lang={openFile.lang}
                            className='h-[13rem] animate-[detail-in_0.3s_ease-out] p-3 motion-reduce:animate-none sm:h-[15rem]'
                        />

                        {/* Terminal */}
                        <div className='flex items-center justify-between gap-2 border-y border-hairline bg-chrome px-3 py-1.5'>
                            <span className='font-mono text-[11px] font-semibold uppercase tracking-wider text-accent'>Terminal</span>

                            <button
                                type='button'
                                onClick={runTests}
                                disabled={running}
                                className='inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1 font-mono text-[11px] font-semibold text-on-brand transition-colors duration-200 hover:bg-accent-strong disabled:cursor-wait disabled:opacity-70'>
                                {running ? (
                                    <>
                                        <Loader2
                                            size={12}
                                            className='animate-spin'
                                        />
                                        Running
                                    </>
                                ) : revealed >= total ? (
                                    <>
                                        <RotateCcw size={12} /> Re-run
                                    </>
                                ) : (
                                    <>
                                        <Play size={12} /> Run Tests
                                    </>
                                )}
                            </button>
                        </div>

                        <div className='h-[9.5rem] overflow-auto p-3 font-mono text-[11px] leading-5 sm:leading-6'>
                            <p className='text-muted'>
                                <span className='text-accent'>$</span> {suite.command}
                            </p>

                            {suite.run.slice(0, revealed).map((line, i) => (
                                <p
                                    key={line.text}
                                    style={{ animationDelay: `${i * 40}ms` }}
                                    className='animate-[term-in_0.25s_ease-out_both] motion-reduce:animate-none'>
                                    <span className={line.ok ? 'text-term-pass' : 'text-term-fail'}>{line.ok ? '✓' : '✕'}</span>{' '}
                                    <span className='text-body'>{line.text}</span> <span className='text-gutter'>({line.time})</span>
                                </p>
                            ))}

                            {revealed > suite.run.length && (
                                <p className='mt-2 animate-[term-in_0.25s_ease-out_both] motion-reduce:animate-none'>
                                    <span className='text-term-pass'>{suite.summary.passed} passed</span>
                                    <span className='text-gutter'>, </span>
                                    <span className={suite.summary.failed ? 'text-term-fail' : 'text-gutter'}>{suite.summary.failed} failed</span>{' '}
                                    <span className='text-gutter'>({suite.summary.time})</span>
                                </p>
                            )}

                            {running && (
                                <span
                                    aria-hidden='true'
                                    className='inline-block h-3.5 w-1.5 animate-[caret_1s_step-end_infinite] bg-accent align-middle'
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* live region so the simulated run is announced rather than silent */}
            <p
                aria-live='polite'
                className='sr-only'>
                {running ? 'Running tests' : revealed >= total ? `${suite.summary.passed} passed, ${suite.summary.failed} failed` : ''}
            </p>
        </Section>
    );
}
