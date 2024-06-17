// キーワードのリスト
const keywords: string[] = ["にく", "とら", "はな"];

// 特定の単語を文章から探し、位置を返す関数
export function keywordSearch(text: string): { keyword: string, position: number }[] {
    const results: { keyword: string, position: number }[] = [];

    keywords.forEach(keyword => {
        let position = text.indexOf(keyword);
        while (position !== -1) {
            results.push({ keyword, position });
            position = text.indexOf(keyword, position + 1);
        }
    });

    return results;
}
