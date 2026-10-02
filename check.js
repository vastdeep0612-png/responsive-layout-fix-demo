(function () {
  var widths = [375, 768, 1440];
  var template = document.querySelector("#site-template");

  function mount(board) {
    widths.forEach(function (width) {
      var slot = document.createElement("div");
      slot.className = "slot";
      var caption = document.createElement("p");
      caption.textContent = width + "px";
      var frame = document.createElement("div");
      frame.className = "frame";
      var screen = document.createElement("div");
      screen.className = "screen";
      screen.dataset.width = String(width);
      screen.dataset.mode = board.dataset.mode;
      screen.appendChild(template.content.cloneNode(true));
      frame.appendChild(screen);
      var status = document.createElement("p");
      status.className = "status";
      slot.appendChild(caption);
      slot.appendChild(frame);
      slot.appendChild(status);
      board.appendChild(slot);
      measure(screen, status);
    });
  }

  function overflows(screen) {
    var hero = screen.querySelector(".hero");
    return hero.offsetWidth > Number(screen.dataset.width) + 1;
  }

  function collides(screen) {
    var title = screen.querySelector(".title").getBoundingClientRect();
    var cta = screen.querySelector(".cta").getBoundingClientRect();
    var apart = title.right < cta.left || cta.right < title.left || title.bottom < cta.top || cta.bottom < title.top;
    return !apart && title.width > 0 && cta.width > 0;
  }

  function uneven(screen) {
    var shift = screen.querySelector(".shift");
    return parseFloat(getComputedStyle(shift).marginLeft) > 40;
  }

  function measure(screen, status) {
    var width = screen.dataset.width;
    var broken = screen.dataset.mode === "broken";
    var overflow = overflows(screen);
    var hit = collides(screen);
    var gap = uneven(screen);
    screen.dataset.overflow = overflow ? "yes" : "no";
    screen.dataset.overlap = hit ? "yes" : "no";
    screen.dataset.spacing = gap ? "uneven" : "even";
    var ok = broken
      ? (width === "1440" ? !overflow && hit && gap : overflow && hit && gap)
      : (!overflow && !hit && !gap);
    status.textContent = (ok ? "Pass. " : "Fail. ") +
      "overflow " + (overflow ? "yes" : "no") +
      ", overlap " + (hit ? "yes" : "no") +
      ", spacing " + (gap ? "uneven" : "even");
    status.className = ok ? "status pass" : "status fail";
    return ok;
  }

  mount(document.querySelector("#before-board"));
  mount(document.querySelector("#after-board"));

  var results = [...document.querySelectorAll(".status")].map(function (node) { return node.classList.contains("pass"); });
  var pageOk = document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1;
  var list = document.querySelector("#checks");
  var labels = ["375 before", "768 before", "1440 before", "375 after", "768 after", "1440 after"];
  results.forEach(function (ok, index) {
    var item = document.createElement("li");
    item.textContent = (ok ? "Pass. " : "Fail. ") + labels[index];
    item.className = ok ? "pass" : "fail";
    list.appendChild(item);
  });
  var pageItem = document.createElement("li");
  pageItem.textContent = pageOk ? "Pass. This page does not scroll sideways." : "Fail. This page scrolls sideways.";
  pageItem.className = pageOk ? "pass" : "fail";
  list.appendChild(pageItem);
  var allOk = results.every(Boolean) && pageOk;
  document.querySelector("#summary").textContent = allOk
    ? "The before frames show the faults. The after frames clear them."
    : "A measurement does not match the intended repair.";

  var steps = [
    "375px before: the hero is wider than the phone and the button covers the heading.",
    "375px after: the hero fits and the button sits under the heading.",
    "768px before: the middle card is pushed 80px out of line.",
    "768px after: the cards share one gap.",
    "1440px before: the wide hero still fits, and the spacing fault remains.",
    "1440px after: overflow, overlap, and spacing are clear."
  ];
  document.querySelector("#play").addEventListener("click", function () {
    var walk = document.querySelector("#walk");
    var index = 0;
    walk.textContent = steps[0];
    var timer = setInterval(function () {
      index += 1;
      if (index >= steps.length) {
        clearInterval(timer);
        walk.textContent = "Walkthrough finished. About 75 seconds. SELF-INITIATED DEMO. NOT CLIENT WORK.";
        return;
      }
      walk.textContent = steps[index];
    }, 12500);
  });
})();
