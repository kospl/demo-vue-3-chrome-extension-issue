# demo-vue-3-chrome-extension-issue
Demo of Chrome extension's storage + Vue 3 bug when trying to save array to storage

Repro steps:
 - open Chrome browser
 - install demo extension in Developer mode, see instructions at https://developer.chrome.com/docs/extensions/mv2/getstarted/#manifest
 - pin extension (use `Arrange on your toolbar` instructions at https://support.google.com/chrome_webstore/answer/2664769)
 - click on extension's popup
 - when popup window opens, right-click on it and check developer console for errors.

## Links
 - issue reference: https://github.com/vuejs/vue-next/issues/3423 
 - workaround: https://github.com/vuejs/vue-next/issues/3423#issuecomment-799783045
