# FG - Frameworks - Assignment 2 - NPM Multipage Website #

## Introduction ##
For this school assignment I have built a complete website using Node, Express and EJS to test my knowledge of routing, templates, modular development and project organization. 
The topic of the website is to showcase my picks of Youtube channels divided in four main categories containing multiple channels with their descriptions and links in each category.

## Live Demo ##
You can checkout our website here: https://fgassignment2npm.vercel.app/

## Tech Stack ##
- HTML5
- CSS
- Vanilla Javascript
- Node.js
- Express.js
- EJS
- npm

## Project Structure ##
- **Project root**:
  - **data**:
    - content.js (data file containing data for navigation menu, footer and homepage content)
    - data.js (data file containing all the listed youtube channels)
    - socials.js (data file for social media icons)
  - **public**:
    - css (stylesheets)
    - fonts (fonts for the website)
    - images (image assets)
    - logos (logo assets)
    - scripts (client side javascript)
  - **routes** (Express route handlers):
    - documentaries.js (Documentaries channel route (GET /documentaries))
    - entertainment.js (Entertainament channel route (GET /entertainment))
    - lifestyle.js (Lifestyle channel route (GET /lifestyle))
    - podcasts.js (Podcast channel route (GET /podcasts))
  - **views** (EJS templates):
    - pages (Documentaries channel route (GET /documentaries))
      - category.ejs (template for all four category pages)
      - channel.ejs (template for all channel description pages)
      - home.ejs (template for the homepage)
    - partials (reusable template fragments)
      - footer.js (site footer)
      - head.ejs (site head section)
      - header.ejs (site header)
      - navmenu.ejs (site navigation menu)
      - readmore.ejs (site readmore button)
  - index.js (Main application entry point)
  - package.json (Project metadata and dependencies)
  - .gitignore (files excluded from the git)
