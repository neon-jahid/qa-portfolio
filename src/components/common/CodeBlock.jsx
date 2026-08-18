const KEYWORDS = new Set([
    'import',
    'from',
    'export',
    'default',
    'const',
    'let',
    'var',
    'class',
    'constructor',
    'function',
    'async',
    'await',
    'return',
    'new',
    'this',
    'if',
    'else',
    'for',
    'of',
    'true',
    'false',
    'null',
]);

const TOKEN_CLASS = {
    comment: 'text-syntax-comment',
    string: 'text-syntax-string',
    num: 'text-syntax-num',
    keyword: 'text-syntax-key',
    fn: 'text-syntax-spec',
    type: 'text-syntax-folder',
    key: 'text-syntax-folder',
    var: 'text-syntax-file',
    punct: 'text-syntax-punct',
};

/**
 * Minimal JS/JSON tokenizer — enough for the snippets in portfolioData, not a
 * general parser. Order matters: comments and strings are consumed first so a
 * `/` inside them is never mistaken for a regex literal.
 */
function tokenize(line, lang) {
    const out = [];
    let rest = line;

    while (rest.length) {
        let m;

        if ((m = /^\/\/.*/.exec(rest))) out.push(['comment', m[0]]);
        else if ((m = /^(['"`])(?:\\.|(?!\1).)*\1?/.exec(rest))) {
            // In JSON a quoted token followed by ':' is a property name
            const isKey = lang === 'json' && /^\s*:/.test(rest.slice(m[0].length));
            out.push([isKey ? 'key' : 'string', m[0]]);
        } else if ((m = /^\/(?:\\.|\[[^\]]*\]|[^/\\\s])+\/[gimsuy]*/.exec(rest))) out.push(['string', m[0]]);
        else if ((m = /^\d[\d._]*/.exec(rest))) out.push(['num', m[0]]);
        else if ((m = /^[A-Za-z_$][\w$]*/.exec(rest))) {
            const word = m[0];
            const after = rest.slice(word.length);
            let kind = 'var';
            if (KEYWORDS.has(word)) kind = 'keyword';
            else if (/^\s*\(/.test(after)) kind = 'fn';
            else if (/^[A-Z]/.test(word)) kind = 'type';
            out.push([kind, word]);
        } else if ((m = /^\s+/.exec(rest))) out.push(['plain', m[0]]);
        else {
            m = [rest[0]];
            out.push(['punct', m[0]]);
        }

        rest = rest.slice(m[0].length);
    }

    return out;
}

export default function CodeBlock({ code, lang = 'js', className = '' }) {
    // split on \r?\n — the data file is CRLF on Windows and a trailing \r
    // would otherwise survive into the rendered (whitespace-pre) output
    const lines = code.split(/\r?\n/);

    return (
        <div className={`overflow-auto font-mono text-[11px] leading-5 sm:text-xs sm:leading-6 ${className}`}>
            <ol>
                {lines.map((line, i) => (
                    <li
                        key={i}
                        className='flex gap-3 whitespace-pre'>
                        <span
                            aria-hidden='true'
                            className='w-5 shrink-0 select-none text-right text-gutter'>
                            {i + 1}
                        </span>

                        <span>
                            {tokenize(line, lang).map(([kind, text], t) => (
                                <span
                                    key={t}
                                    className={TOKEN_CLASS[kind] ?? ''}>
                                    {text}
                                </span>
                            ))}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
