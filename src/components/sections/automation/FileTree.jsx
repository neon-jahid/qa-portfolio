import { FileCode2, Folder, FolderOpen } from 'lucide-react';
import { FILE_ICON, withGuides } from './treeGuides';

/* ============================================================================
 * AUTOMATION — PROJECT STRUCTURE
 * A fake file explorer. Only nodes carrying a `file` id are clickable —
 * folders are structure, not targets — and clicking one opens it in the editor.
 * ==========================================================================*/

export default function FileTree({ label, nodes, openId, onOpen }) {
    const tree = withGuides(nodes);

    return (
        <>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent'>{label}</p>

            <div className='rounded-2xl border border-hairline bg-inset p-3 font-mono text-xs leading-6'>
                {tree.map((node) => {
                    const isOpen = node.file === openId;
                    const Icon = node.file ? (FILE_ICON[node.kind] ?? FileCode2) : isOpen ? FolderOpen : Folder;

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

                    return node.file ? (
                        <button
                            key={node.name}
                            type='button'
                            onClick={() => onOpen(node.file)}
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
        </>
    );
}
