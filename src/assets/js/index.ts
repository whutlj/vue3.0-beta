export default (function(designWidth, maxWidth) {
  // let tid: any;
  // function refreshRem(): void {
  //   const scale = 1 / devicePixelRatio;
  //   const ele = document.querySelector('meta[name="viewport"]');
  //   if (ele) {
  //     ele.setAttribute(
  //       'content',
  //       'initial-scale=' +
  //         scale +
  //         ', maximum-scale=' +
  //         scale +
  //         ', minimum-scale=' +
  //         scale +
  //         ', user-scalable=no'
  //     );
  //   }

  //   document.documentElement.style.fontSize =
  //     document.documentElement.clientWidth / 10 + 'px';
  //   document.body.style.fontSize = '14px';
  // }
  // refreshRem();
  // window.addEventListener('resize', () => {
  //   clearTimeout(tid);
  //   tid = setTimeout(() => {
  //     refreshRem();
  //   }, 300);
  // });
  const doc = document;
  const win = window;
  const docEl = doc.documentElement;
  const remStyle = document.createElement('style');
  let tid: any;

  function refreshRem() {
    let width = docEl.getBoundingClientRect().width;
    maxWidth = maxWidth || 540;
    if (width > maxWidth) {
      width = maxWidth;
    }
    const rem = width * 100 / designWidth;
    remStyle.innerHTML = 'html{font-size:' + rem + 'px !important;}';
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    let wrap: HTMLElement | null = doc.createElement('div');
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  // 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem();

  win.addEventListener(
    'resize',
    () => {
      clearTimeout(tid); // 防止执行两次
      tid = setTimeout(refreshRem, 300);
    },
    false
  );

  win.addEventListener(
    'pageshow',
    (e) => {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        console.log('后退');
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = '16px';
  } else {
    doc.addEventListener(
      'DOMContentLoaded',
      () => {
        doc.body.style.fontSize = '16px';
      },
      false
    );
  }
})(750, 750);
