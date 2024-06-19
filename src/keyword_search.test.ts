import { test, expect } from "vitest";
import { keywordSearch, kanji2kana, kana2hira } from "./keyword_search";

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
    const input = "隣のキャクはよくカキ食う客だ";
    const expectedOutput = "となりのきゃくはよくかきくうきゃくだ";
    let kana_result = await kanji2kana(input);
    let hira_result = kana2hira(kana_result)
    expect(hira_result).toBe(expectedOutput);
});

test('kana2hira should convert kana to hira'), async () => {
    const input = "トナリのキャクはよくカキクうキャクだ";
    const expectedOutput = "となりのきゃくはよくかきくうきゃくだ";
    let kana_result = await kanji2kana(input);
    let hira_result = kana2hira(kana_result)
    expect(hira_result).toBe(expectedOutput);
};