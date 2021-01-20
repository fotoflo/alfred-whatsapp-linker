#!/usr/bin/osascript -l JavaScript

function getClipboard(){
    var app = Application('System Events');
    app.includeStandardAdditions = true;
    return app.theClipboard();
}

function filter(clipboard){

   console.log("clipboard: " + clipboard)

   if(!clipboard.match( /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/g )){
     // not a phone number
	console.log("not a valid number")
     return "NAN";
   }

   clipboard = clipboard.replace(/\D/g, '');
   clipboard = "https://api.whatsapp.com/send?phone=" + "+" + clipboard;
   return clipboard;
}

function run(){
	let clipboard = getClipboard()
	return filter(clipboard)
}