#!/bin/bash

# Run the build
npm run build

# Copy the image to dist
mkdir -p dist/images
cp src/images/humidifier-1.png dist/images/

# Copy the built files to root
cp dist/ha-mi-humidifier-card.iife.js ./ha-mi-humidifier-card.js

# Add and commit the built file
git add ha-mi-humidifier-card.js
git commit -m "chore: update built file for HACS"