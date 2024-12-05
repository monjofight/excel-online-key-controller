(function () {
  "use strict";

  const DISABLED_KEYS = {
    SPACE: 0,
    // 必要に応じて他のキーを追加
  };

  const isExcelOnline = () => {
    return (
      window.location.href.includes("excel.live.com") ||
      window.location.href.includes("excel.officeapps.live.com")
    );
  };

  const handleKeydown = (event) => {
    if (
      DISABLED_KEYS[
        Object.keys(DISABLED_KEYS).find(
          (key) => DISABLED_KEYS[key] === event.keyCode
        )
      ]
    ) {
      event.preventDefault();
      event.stopPropagation();
      console.log(`Key ${event.key} disabled on: ${window.location.href}`);
    }
  };

  if (isExcelOnline()) {
    document.addEventListener("keydown", handleKeydown, true);
    console.log(
      "Excel Online Key Listener initialized on:",
      window.location.href
    );
  }
})();
