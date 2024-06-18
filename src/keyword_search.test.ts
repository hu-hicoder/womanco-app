import { test, expect } from "vitest";
import { keywordSearch, kanji2kana } from "./keyword_search";

test("keywordSearch test", () => {
    const inputText = 'とらのはなはな'; // 検索対象の文章

    const result = keywordSearch(inputText);
    expect(result).toEqual([
        {
            "keyword": "とら",
            "position": 0,
        },
        {
            "keyword": "はな",
            "position": 3,
        },
        {
            "keyword": "はな",
            "position": 5,
        }
    ])
})


test('kanji2kana should convert kanji to kana', async () => {
    const input = "隣の客はよく柿食う客だ";
    const expectedOutput = "となりのきゃくはよくかきくうきゃくだ";
    const result = await kanji2kana(input);
    expect(result).toBe(expectedOutput);
});
