#!/usr/bin/osascript -l JavaScript

function getClipboard() {
  var app = Application("System Events");
  app.includeStandardAdditions = true;
  return app.theClipboard();
}

function filter(clipboard) {
  console.log("clipboard: " + clipboard);

  if (!clipboard.match(/([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/g)) {
    // not a phone number
    console.log("not a valid number");
    return "NAN";
  }

  if (clipboard.match(/^[0]/)) {
    // local number in indonesia
    // replace first letter 0 with 62
    console.log("local number in indonesia");
    clipboard = clipboard.replace(/^(0)/, "62");
  }

  clipboard = clipboard.replace(/\D/g, "");
  clipboard = "https://api.whatsapp.com/send?phone=" + "+" + clipboard;
  return clipboard;
}

function run() {
  let clipboard = getClipboard();
  return filter(clipboard);
}

exports.filter = filter;
