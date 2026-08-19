import FileTree from './FileTree';
import FocusGrid from './FocusGrid';

/* ============================================================================
 * AUTOMATION — LEFT CARD (architecture)
 * Two blocks stacked in one card: the project structure (drives which file the
 * editor shows) and the testing-focus tiles.
 * ==========================================================================*/

export default function ArchitecturePanel({ suite, openId, onOpen }) {
    return (
        <div className='rounded-3xl border border-line bg-card p-5 sm:p-6'>
            <h3 className='mb-5 text-lg font-bold text-heading'>Architecture &amp; Key Focus</h3>

            <FileTree
                label={suite.structureLabel}
                nodes={suite.tree}
                openId={openId}
                onOpen={onOpen}
            />

            <FocusGrid
                label={suite.focusLabel}
                items={suite.focus}
            />
        </div>
    );
}
