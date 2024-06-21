export function text2Button(data: string, keywords: string[]): string {
  return keywords.reduce((acc, keyword) => {
    const regex = new RegExp(`(${keyword})`, 'g');
    return acc.replace(regex, `<button id="womanco" keyword="${keyword}" style="all: unset; cursor: pointer;">$1</button>`);
  }, data);
}

export function addButtonClickHandlers(clickSound: HTMLAudioElement) {
  document.querySelectorAll('button[id="womanco"]').forEach(button => {
    button.addEventListener('click', (event) => {
      const keyword = (event.target as HTMLElement).getAttribute('keyword');
      if (keyword) {
        const modalKeyword = document.getElementById('modal-keyword')!;
        const modal = document.getElementById('modal')!;
        modalKeyword.innerText = keyword;
        modal.style.display = 'flex';
        clickSound.play(); // ボタンがクリックされたときに音を再生
      }
    });
  });
}
