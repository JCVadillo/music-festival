# music-festival
MusiceFestival website with Gulp and SASS

Visit the website deployed - https://jcvadillo.github.io/music-festival/
## General Description 

This is a project of a basic Music Festival website, created using the following technologies. Although usually source code is not deployed - the src/ folder - it has been added to the repository as proof of knowledge and how the project is structured.

### Functionalities

- The website is fully responsive.

- The website also includes video running in the header and a gallery that when clicking on one foto displays it in a modal version, the modal can be closed by clicking anywhere on the screen and in the "X" button

- If the user scrolls down after the header, the top bar changes to fixed positioning 

- If one of the Images is in modal mode, the scroll option is cancelled, once the modal is closed the scrolling option is back

Following are the technologies used with a short description

- SASS
  - Allows to compile .scss files. The source SASS files are needed to work with during development.
  - Use of @forward, @use, and @mixins
  - Structure the code by utilities (src/base folder) and styling (src/layout folder)
- GULP
  - Use to create the workflow necessary to perform different tasks using *pipes* to have a sass compiler, optimising and creating different image formats specifically designed for good performance, also joins and improves JS and CSS
- NPM
  - Mainly used for Dependency Management and installation and Package.json installation:
- NPX
  - Mainly used to execute gulp workflow, i.e. to execute the *dev* task from the *gulpfile*  we run the command ```npx gulp dev```

### Relevant Dependencies

#### CSS
- Plumber:
  - Allows the workflow to keep running even though there is an error in the code, also shorted the error message with more relevant information
- CSS Nano: 
  - Compresses the CSS code in one line after compiling, so the website is more efficient
- Autoprefixer:
  - Arrange the code in case some CSS property is not supported
- PostCSS:
  - Needed to use CSSNano and Autoprefixer through the gulpfile

#### JS
-Gulp Terser JS:
  - As CSS Nano, compresses the JS code after compiling, the website is more efficient

#### Images
- Webp, Avif and Cache
  - Use to generate the image format which leads to much lighter images with almost the same quality
- ImageMin:
  - Chache dependency requires it to apply an optimization level to png or/and jpg(jpeg) images

#### General

- Sourcemaps:
  - Use to map the compressed CSS and JS file to their source files in case future debugging
