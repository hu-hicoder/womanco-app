import { modifyHtml, ModifyHandler } from "./libs/modifier";
import { keywords } from "./keywords";
import { text2Button } from "./libs/button";

// モーダルのHTMLとCSSを追加
const modalHtml = `
  <div id="modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:1000; justify-content:center; align-items:center;">
    <div id="modal-content" style="background-color:transparent; position:relative; padding:20px; border-radius:5px; max-width:500px; width:90%; text-align:center;">
      <button id="modal-close" style="position:absolute; top:10px; right:10px; background:none; border:none; font-size:1.5em; cursor:pointer;">×</button>
      <h2 id="modal-keyword" style="color:pink; font-size:5em; font-weight:bold; margin-top:50px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">厳ついキーワード</h2>
    </div>
  </div>
`;

// モーダルをドキュメントに追加
document.body.insertAdjacentHTML('beforeend', modalHtml);

// ModifyHandlerの設定
const handler: ModifyHandler = {
  ontext(data) {
    const modifiedData = text2Button(data, keywords);
    return { data: modifiedData };
  }
};

// ページが完全に読み込まれた後に処理を実行
const bodyHtml = document.body.innerHTML;

// bodyのHTMLに対して変更を加える
modifyHtml(bodyHtml, handler).then((modifiedHtml) => {
  document.body.innerHTML = modifiedHtml;
  console.log("HTML modified successfully!: ", modifiedHtml);

  // モーダル要素とCloseボタン要素を取得
  const modal = document.getElementById('modal')!;
  // const modalContent = document.getElementById('modal-content')!;
  const modalCloseButton = document.getElementById('modal-close')!;
  const modalKeyword = document.getElementById('modal-keyword')!;

  // Closeボタンのイベントリスナーを追加
  modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // モーダル背景のクリックでモーダルを閉じるイベントリスナーを追加
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // ボタンのクリックイベントリスナーを追加
  document.querySelectorAll('button[id="womanco"]').forEach(button => {
    button.addEventListener('click', (event) => {
      const keyword = (event.target as HTMLElement).getAttribute('keyword');
      if (keyword) {
        modalKeyword.innerText = keyword;
        modal.style.display = 'flex';
      }
    });
  });
}).catch((error) => {
  console.error("Error modifying HTML:", error);
});

export { }
