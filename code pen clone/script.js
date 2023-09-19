const html = document.getElementById("html-area");
const css = document.getElementById("css-area");
const js = document.getElementById("js-area");

const outputCode = document.getElementById("code-output-area");

// outputCode.src = html.value;

html.addEventListener("keydown", () => {
  outputCode.contentDocument.body.innerHTML = html.value;
});

css.addEventListener("keydown", () => {
  outputCode.contentDocument.head.innerHTML = `<style>${css.value}</style>`;
});

js.addEventListener("keydown", () => {
  outputCode.contentWindow.eval(js);
});
