import { Parser } from "htmlparser2";

export type ModifyHandler = {
  onopentag?(
    name: string,
    attribs: { [s: string]: string }
  ): {
    name: string;
    attribs: { [s: string]: string };
  };

  onclosetag?(
    name: string
  ): {
    name: string;
  };

  ontext?(data: string): {
    data: string;
  };

  oncomment?(data: string): {
    data: string;
    clearComment?: boolean;
  };
};

export function modifyHtml(htmlText: string, modifyHandler: ModifyHandler): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    let htmlTextCopy = "";  // 変更後のHTMLテキストを格納する変数

    const parser = new Parser({
      onend() {
        resolve(htmlTextCopy);  // パースが終了したら結果を返す
      },
      onerror(error) {
        reject(error);  // エラーが発生した場合はPromiseを拒否する
      },
      onopentag(name, attribs) {
        if (modifyHandler.onopentag) {
          const res = modifyHandler.onopentag(name, { ...attribs });  // 開始タグに対する処理を行う
          name = res.name;
          attribs = res.attribs;
        }
        htmlTextCopy += `<${name}`;  // 開始タグを文字列に追加
        for (const key of Object.keys(attribs)) {
          const value = attribs[key];
          htmlTextCopy += ` ${key}`;
          if (value !== "") {
            htmlTextCopy += `="${value}"`;
          }
        }
        htmlTextCopy += ">";
      },
      onclosetag(name) {
        if (modifyHandler.onclosetag) {
          const res = modifyHandler.onclosetag(name);  // 終了タグに対する処理を行う
          name = res.name;
        }
        htmlTextCopy += `</${name}>`;  // 終了タグを文字列に追加
      },
      ontext(data) {
        if (modifyHandler.ontext) {
          const res = modifyHandler.ontext(data);  // テキストに対する処理を行う
          data = res.data;
        }
        htmlTextCopy += data;  // テキストを文字列に追加
      },
      oncomment(data) {
        if (modifyHandler.oncomment) {
          const { data: content, clearComment } = modifyHandler.oncomment(data);  // コメントに対する処理を行う
          htmlTextCopy += clearComment ? content : `<!--${content}-->`;
        } else {
          htmlTextCopy += `<!--${data}-->`;
        }
      },
    });

    parser.write(htmlText);  // 入力されたHTMLテキストをパース開始
    parser.end();  // パース終了
  });
}