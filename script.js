(function() {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.self === window.top) {
        document.body.remove();
        document.body.innerHTML = "<h1>不正なアクセです。</h1>";
      }
    });
})();
