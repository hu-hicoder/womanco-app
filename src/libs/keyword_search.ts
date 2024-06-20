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

export async function kanji2kana(text: string): Promise<string> {
    const apiUrl = `https://api.excelapi.org/language/kanji2kana?text=${encodeURIComponent(text)}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data;
}

export function kana2hira(text: string): string {
    const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョッ";
    const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょっ";

    // [\u30A1-\u30FA]はカタカナの文字コード
    return text.replace(/[\u30A1-\u30F6]/g, (match) => {
        const index = katakana.indexOf(match);
        return index !== -1 ? hiragana[index] : match;
    });
}

export function divideText(text: string): string[] {
    const result: string[] = [];
    let i = 0;
    // ひらがなと漢字の境界で分割
    for (let j = 0; j < text.length; j++) {
        // ひらがなの場合
        if (text[j].match(/[\u3040-\u309F]/)) {
            result.push(text[j]);
            i = j + 1;
        }
        else {
            // ひらがなになるまで境界を探す
            while (i + 1 < text.length && !text[i + 1].match(/[\u3040-\u309F]/)) {
                i++;
            }
            result.push(text.slice(j, i + 1));
            j = i;
        }
    }

    return result;
}