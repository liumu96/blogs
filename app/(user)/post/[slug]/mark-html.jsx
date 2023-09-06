import { read } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

async function main(mdtext) {
  const file = await unified().use(remarkParse).use(remarkHtml).process(mdtext);

  return String(file);
}

const MarkdownText = ({ mdtext }) => {
  return (
    <ReactMarkdown
      children={mdtext}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );
};
export default MarkdownText;
