import { FileCode2, FileJson2 } from 'lucide-react';

/* ============================================================================
 * AUTOMATION — FILE TREE HELPERS
 * ==========================================================================*/

/** node.kind → icon. Folders are handled separately (open vs closed). */
export const FILE_ICON = { spec: FileCode2, data: FileJson2, file: FileCode2 };

/**
 * Turns the flat `tree` list in data/automationSuite.js into ├─ / └─ prefixes.
 * Each node only knows its own depth, so for every node we look ahead: if a
 * later node sits at the same depth before the list drops shallower, this node
 * still has a sibling below it and gets ├─ (plus a │ carried down for its
 * ancestors); otherwise it is the last child and gets └─.
 */
export function withGuides(nodes) {
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
