export default (function() {
  let tid: any;
  function refreshRem(): void {
    const scale = 1 / devicePixelRatio;
    const ele = document.querySelector('meta[name="viewport"]');
    if (ele) {
      ele.setAttribute(
        'content',
        'initial-scale=' +
          scale +
          ', maximum-scale=' +
          scale +
          ', minimum-scale=' +
          scale +
          ', user-scalable=no'
      );
    }

    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 10 + 'px';
    document.body.style.fontSize = '14px';
  }
  refreshRem();
  window.addEventListener('resize', () => {
    clearTimeout(tid);
    tid = setTimeout(() => {
      refreshRem();
    }, 300);
  });
})();
