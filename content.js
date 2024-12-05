(function () {
  "use strict";

  const handleKeydown = (event) => {
    if (event.keyCode == 0) {
      event.preventDefault();
      event.stopPropagation();
      console.log(`Key ${event.key} disabled on: ${window.location.href}`);
    }
  };

  document.addEventListener("keydown", handleKeydown, true);
  console.log(
    "Excel Online Key Listener initialized on:",
    window.location.href
  );
})();
