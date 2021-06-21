
# Progressive Web Applications

### Module Overview
- Identify performance bottlenecks in web applications.
- Explain how performance can be measured in web applications.
- Explain the five main categories measured in a Lighthouse audit.
- Optimize CSS, JavaScript, and media assets for performance.
- Set up webpack in a new front-end project.
- Use service workers to cache assets for offline functionality.
- Convert an existing web application to a PWA.

#### Tech Used
- Google Lighthouse - part of Chrome DevTools, it improvides audits for performance, accessibility, and more

- webpack - simplifies front-end web dev; generates static assests from moduels w/ dependencies

- webpack-bundle-analyzer - creates interactive zoomable treemap to visualize the size of webpack output files 

- file-loader - resolves import/require() on a file into a URL and emits the file into the output directory.

- image-webpack-loader - enhances the image-loading process

- SW-precache-webpack - use service workers to cache your external project dependencies. Generates a service worker file, using sw-precache, and adds it to the directory

- webpack-PWA-manifest - generates a manifest.json for your PWA w/ icon resizing and fingerprinting support