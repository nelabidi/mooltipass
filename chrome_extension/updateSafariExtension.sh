#!/bin/bash

# Inject Scripts

cp content/mooltipass-content.js Mooltipass.safariextension/content/mooltipass-content.js
cp content/mooltipass-content.css Mooltipass.safariextension/content/mooltipass-content.css
cp content/website.js Mooltipass.safariextension/content/website.js
cp -Rf options Mooltipass.safariextension/ 
cp -Rf vendor Mooltipass.safariextension/
cp -Rf background Mooltipass.safariextension/
cp -Rf images Mooltipass.safariextension/
cp -Rf css Mooltipass.safariextension/
cp -Rf popups Mooltipass.safariextension/
cp -Rf fonts Mooltipass.safariextension/

# Fixes image paths for content styles
find ./Mooltipass.safariextension -name "*.css" -type f -print0 | xargs -0 sed -i '' 's/chrome-extension:\/\/__MSG_@@extension_id__\/images/images/g'

python updateSafariVersion.py

