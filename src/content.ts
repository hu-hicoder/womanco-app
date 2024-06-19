import { html2Tree, tree2Html } from "./parse";

// 使用例
const html = `<div><p>Hello, <b>world!</b></p></div>`;
const tree = html2Tree(html);

console.log('Tree structure:', tree);

const updatedHtml = tree2Html(tree);
console.log('HTML:', updatedHtml);