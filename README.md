# kvk-autocomplete

## Short description
Use the Dutch chamber of commerce (KVK) database to fill in a number of fields on your Cognito Forms registration form, based on the company's unique KVK id. Works great together with my kvk-search tool.

## How it works
Append the kvk id to the url as a parameter and the script will call your server which contains your secret API key to access the KVK database. Get yours here: https://developers.kvk.nl/. Create a form with Cognito Forms here: https://www.cognitoforms.com/ and use the same naming conventions for your fields as in the html file.

## Files
* 'default' is the nginx configuration file for your node.js server
* 'kvk-autocomplete-node.js' is the file for your node.js server
* 'kvk-autocomplete.js' is the client-side script
* 'kvk-autocomplete.html' shows where and how to insert the script on your html file
