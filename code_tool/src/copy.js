window.onload = function () {
  const target = document.getElementById("outputArea");
  target.readOnly = true;
};
document.getElementById("cp-btn").onclick = function () {
  var textarea = document.getElementById("outputArea");
  //コピー範囲の選択
  textarea.select();
  // コピー
  document.execCommand("copy");
  //選択の解除
  document.getSelection().removeAllRanges();
};
