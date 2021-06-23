
# Progressive Web Applications

### Module Overview
- Identify performance bottlenecks in web applications.
- Explain how performance can be measured in web applications.
- Explain the five main categories measured in a Lighthouse audit.
- Optimize CSS, JavaScript, and media assets for performance.
- Set up webpack in a new front-end project.
- Use service workers to cache assets for offline functionality.
- Convert an existing web application to a PWA.

- Code splitting bundles of JavaScript files to reduce the page-load time.
- Modularization of your application separates concerns and encapsulates code.
- webpack's bundles are based on a dependency graph that manages dependencies starting at an entry point.
- webpack is highly extensible and configurable.

#### Tech Used
- Google Lighthouse - part of Chrome DevTools, it improvides audits for performance, accessibility, and more

- webpack - simplifies front-end web dev; generates static assests from moduels w/ dependencies

- webpack-bundle-analyzer - creates interactive zoomable treemap to visualize the size of webpack output files 

- file-loader - resolves import/require() on a file into a URL and emits the file into the output directory.

- image-webpack-loader - enhances the image-loading process

- SW-precache-webpack - use service workers to cache your external project dependencies. Generates a service worker file, using sw-precache, and adds it to the directory

- webpack-PWA-manifest - generates a manifest.json for your PWA w/ icon resizing and fingerprinting support

### Definitions

- Paint - when content is loaded on the screen

- First Meaningful Paint - measures when the primary content of a page is visible

- Time to Interactive - how long it takes for the website being audited to become usable

- Page abandonment - when a user leaves a page without completing the task they set out to do

- Minification - process of taking code and removing all unnecessary characters and whitespace without any loss of functionality to reduce file size

- Lazy Loading - only load assets as they are needed ex: <script src='./dist/script.min.js' defer ></script> the defer modifer makes this script load lazy

- Dependency graph - when one file requires another to function properly, that second file is called a dependency. Dependency graphs are a way to visualize that, and becomes very useful as apps scale up

- Bundling - an optimization technique, its when multiple JS files are merged together to reduce the number of page requests in the web browser

- Code Split

- Entry Point

- Loaders - pre-process assets on file by file before and during the build, mostly used for non-JS files like img, HTML, CSS

- Plugins - opperates bundle by byndle and delieved changes at the end of the build

- Service Workers - background scripts that run in the browser, seperate from the JavaScript. They allow us to control how network requests are handled
    When you make a change to the service worker, navgate to Chrome DevTools/Applications/Storage and check 'Unregister service workers'

Performance Troubleshooting

- Look at the Network tab; a lot of times poor performance of a website can be atttributed to a poor internet connection of the user's part. Test your site by mimicking various network speeds via throttling through the Network Tab of the Chrome Devtools 

- Go to Views menu and select Search, then type in the name of a function or variable or whatever to see which other files depend on it

npm run start:dev localhost:8080
