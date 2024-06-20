import { test, expect } from "vitest";
import { keywordSearch, kanji2kana, kana2hira, divideText } from "./keyword_search";

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
    const expectedOutput = "となりのキャクはよくカキくうきゃくだ";
    let result = await kanji2kana(input);
    expect(result).toBe(expectedOutput);
});

// TODO: このテストが通っているのに、中が実行されていない？
test('kana2hira should convert kana to hira'), async () => {
    const input = "ナトリのキャクはよくカキクうキャクだ";
    const expectedOutput = "となりのきゃくはよくかきくうきゃくだ";
    let result = kana2hira(input)
    expect(result).toBe(expectedOutput);
};

test('divideText should divide text by hiragana and kanji', () => {
    const input = "お土産を";
    const expectedOutput = ["お", "土産", "を"];
    let result = divideText(input);
    expect(result).toEqual(expectedOutput);
});
