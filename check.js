(function () {
  function overflows(frame) {
    return frame.scrollWidth > frame.clientWidth + 1;
  }

  function mark(id, text, kind) {
    var node = document.querySelector(id);
    node.textContent = text;
    node.className = "status " + kind;
  }

  var broken = document.querySelector("#broken-frame");
  var fixed = document.querySelector("#fixed-frame");
  var brokenOverflow = overflows(broken);
  var fixedOverflow = overflows(fixed);
  var pageOverflow = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;

  mark("#broken-status", brokenOverflow
    ? "Horizontal overflow: yes. This frame scrolls sideways."
    : "Horizontal overflow: no. The broken sample failed to reproduce the bug.",
    brokenOverflow ? "bad" : "bad");

  mark("#fixed-status", fixedOverflow
    ? "Horizontal overflow: yes. The fix did not hold."
    : "Horizontal overflow: no. This frame stays inside the screen.",
    fixedOverflow ? "bad" : "good");

  document.querySelector("#check-broken").textContent = brokenOverflow
    ? "Pass. The before frame overflows horizontally."
    : "Fail. The before frame does not overflow.";
  document.querySelector("#check-fixed").textContent = fixedOverflow
    ? "Fail. The after frame still overflows."
    : "Pass. The after frame does not overflow horizontally.";
  document.querySelector("#check-page").textContent = pageOverflow
    ? "Fail. This case-study page overflows horizontally."
    : "Pass. This case-study page does not overflow horizontally.";

  var ok = brokenOverflow && !fixedOverflow && !pageOverflow;
  document.querySelector("#summary").textContent = ok
    ? "The reproduction matches the code above."
    : "The measurement does not match the intended reproduction.";
})();
