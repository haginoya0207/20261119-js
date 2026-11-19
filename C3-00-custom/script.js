const button = document.querySelector('.btn-rotate');
const front = button.querySelector('.btn-rotate-front');

button.addEventListener('click', () => {
  // 回転中の連打を防止
  if (button.classList.contains('fast-spin')) return;

  // 高速回転のクラスを追加
  button.classList.add('fast-spin');

  // 回転の途中（200ms後）で1〜7のランダムな数字に書き換える
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 9) + 1;
    front.textContent = randomNum;
    front.classList.toggle('is-seven', randomNum === 7);
  }, 200);

  // 一定時間後に高速回転のクラスを削除
  setTimeout(() => {
    button.classList.remove('fast-spin');
  }, 400); // 高速回転のアニメーション時間に合わせる
});

const btnAdv = document.querySelector('.btn-inner-adv');
const rectAdv = document.querySelector('.btn-rect-adv');

btnAdv.addEventListener('click', () => {
  // 一度クラスをはずして再度付与することで連続クリックでもアニメ再生可能に
  rectAdv.classList.remove('active');
  // 再描画を待ってからクラス付与（わずかな遅延でtransition再適用）
  setTimeout(() => {
    rectAdv.classList.add('active');
  }, 10);
});