import { test, expect } from "vitest";
import { ModifyHandler, modifyHtml } from "./modifier";
import { text2Button } from "./button";

test("modifyHtml test(add button)", async () => {
  const keywords: string[] = ["ねこ", "いぬ", "さる"]; // キーワードリストを定義

  const handler: ModifyHandler = {
    ontext(data) {
      const modifiedData = text2Button(data, keywords);
      return { data: modifiedData };
    }
  };

  const htmlText = `<div class="container">私はねこになった</div>`;
  const modifiedHtml = await modifyHtml(htmlText, handler);
  expect(modifiedHtml).toBe('<div class="container">私は<button id="womanco" keyword="ねこ">ねこ</button>になった</div>');
});
