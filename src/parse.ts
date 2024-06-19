import { Parser } from 'htmlparser2';
import { DomHandler, Document } from 'domhandler';
import { default as serialize } from 'dom-serializer';

// HTMLからTree構造に変換する関数
export function html2Tree(html: string): Document {
    let dom: Document | undefined;
    const handler = new DomHandler(
        (error, parsedDom) => {
            if (error) {
                throw Error("Parse Error");
            } else {
                dom = parsedDom as unknown as Document; // うーん
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