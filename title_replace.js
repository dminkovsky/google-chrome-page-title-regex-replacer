var pattern = /Django \| /g;
var matches = pattern.exec(document.title);
try {
  document.title = document.title.replace(matches[0], "");
} catch (e) {}