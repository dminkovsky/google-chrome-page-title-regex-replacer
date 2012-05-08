*Extension contents:
- manifest.json
- title_replace.js

*To load the extension:
1. Go to Window -> Extensions
2. Make sure "Developer mode" is checked in the top right
3. Click "Load unpacked extensions" and select the folder containing this README

title_replace.js is executed for sites matching `manifest.json.content_scripts.matches[]`.

To use this extension, add values to `manifest.json.content_scripts.matches[] and 
modify the pattern in title.js::pattern.
