import { test, expect } from "vitest";
import { keywordSearch } from "./keyword_search";

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
