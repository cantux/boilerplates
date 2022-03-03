# zillow-webpack

I have crafted an [amatuer Typscript version](https://github.com/cantux/site/tree/master/public) similar to this one before.

## How to run

See {package.json}.scripts

## Developer Notes


## Challange

Create a new, empty project and write a webpack configuration that fulfills the following requirements:

- Has a single javascript file as the entrypoint into the application.
- Handles Javascript/ES6/React code with both .js and .jsx file extensions; should output a single ES5 .js bundle with a uniquie has added to the filename.
- Handles SCSS code with .scss extensions; should return a link referencing the file.
- Handles IMG file with .jpeg, .jpg, .png and .gif extensions; should return a link referencing the file.
- Handles SVG file with .svg extension; return a base-64 data-encoded string if the file is > 1mb and a ling to the file otherwise.
