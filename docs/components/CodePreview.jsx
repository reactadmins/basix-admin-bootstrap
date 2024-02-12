import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodePreview({ lang = "", children }) {
    return (
        <div>
            <SyntaxHighlighter language={lang} style={agate}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodePreview;
