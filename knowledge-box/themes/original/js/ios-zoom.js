/**
 * iOSでフォーム入力時に画面のズームを防ぐ処理
 */

let ua = navigator.userAgent.toLowerCase();
let isiOS = (ua.indexOf('iphone') > -1) || (ua.indexOf('ipad') > -1);
if(isiOS) {
	let viewport = document.querySelector('meta[name="viewport"]');
	if(viewport) {
		let viewportContent = viewport.getAttribute('content');
		viewport.setAttribute('content', viewportContent + ', user-scalable=no');
	}
}
