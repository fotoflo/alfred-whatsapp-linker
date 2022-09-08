This workflow takes a phone number from your clipboard, and opens the browser link to open it in Whatsapp

http://www.packal.org/workflow/alfred-whatsapp-linker


# to use:

1. Copy the phone number to your clipboard

2. Run the workflow

Then:

1.  if the number is valid

Alfred will open the link in the browser and the browser will redirect over to the whatsapp app

2. if the number is invalid

Alfred will show a push notification indicating the number is invalid

3. if the number is valid and starts with a zero 
  
Alfred will append the country code 62
and then Alfred will open the link in the browser and the browser will redirect over to the whatsapp app

# to run test suite
1. `npm install`
2. uncomment the last light of the osascript file
3. npm run jest

# to package for alfred
1. paste the workflow into the script in the existing workflow 
2. export
