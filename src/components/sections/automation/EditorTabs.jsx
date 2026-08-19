import { X } from 'lucide-react';

/* ============================================================================
 * AUTOMATION — EDITOR TAB STRIP
 * One tab per file in the suite. The X on the open tab is decorative — tabs
 * cannot actually be closed, there is always exactly one file open.
 * ==========================================================================*/

export default function EditorTabs({ files, openId, onOpen }) {
    return (
        <div className='flex items-stretch overflow-x-auto border-b border-hairline bg-chrome'>
            {files.map((file) => {
                const isOpen = file.id === openId;

                return (
                    <button
                        key={file.id}
                        type='button'
                        onClick={() => onOpen(file.id)}
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
    );
}
