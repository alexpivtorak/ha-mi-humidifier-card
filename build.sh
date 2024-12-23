#!/bin/bash

# Run the build
npm run build

# Copy the built file to root
cp dist/ha-mi-humidifier-card.js ./ha-mi-humidifier-card.js

# Add and commit the built file
git add ha-mi-humidifier-card.js
git commit -m "chore: update built file for HACS"