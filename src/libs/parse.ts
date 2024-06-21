// modifier.tsでいらないかもしれない
/* 
import { Parser } from 'htmlparser2';
import { DomHandler, Document, Node, DataNode, Element } from 'domhandler';
import { default as serialize } from 'dom-serializer';

// HTMLからTree構造に変換する関数
export function html2Tree(html: string): Document {
    let dom: Document | undefined;
    const handler = new DomHandler(
        (error, parsedDom) => {
            if (error) {
                throw Error("Parse Error");
            } else {
                dom = parsedDom as unknown as Document;
            }
        }
    );
    const parser = new Parser(handler);
    parser.write(html);
    parser.end();
    if (!dom) {
        throw Error("Failed to parse HTML");
    }
    return dom;
}

// Tree構造からHTMLに変換する関数
export function tree2Html(tree: Document): string {
    return serialize(tree);
}

// Tree構造を再帰的に探索して、Textを持つノードを取得する関数
export function getTextNodes(doc: Document | Node): DataNode[] {
    let textNodes: DataNode[] = [];

    function isTextNode(node: Node): node is DataNode {
        return node.type === 'text';
    }

    function isElementNode(node: Node): node is Element {
        return node.type === 'tag';
    }

    function traverse(node: Node) {
        console.log('Current node type:', node.type);

        if (isTextNode(node)) {
            console.log('Text node found:', node);
            textNodes.push(node);
        } else if (isElementNode(node)) {
            console.log('Element node found with children:', node.children.length);
            for (const child of node.children) {
                traverse(child);
            }
        } else {
            console.log('Other node type:', node.type);
        }
    }

    traverse(doc);

    return textNodes;
}
*/

export { }