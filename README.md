# Social Network API

## Description

This interactive Back-End application allows users to creates and edits text, even if the application is fully offline. With the single-page application aspect while featuring the PWA criteria, users will be able to create and edit text on the single page without having to rely on connectivity to the browser.

## Table of Contents

* User Story
* Acceptance Criteria
* Mock Up
* Getting Started & Installation
* Test
* Socials

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## Mock Up
```
In the Screenshots folder are the screenshots for the application being run
```

## Getting Started & Installation

To get started with the application,  make sure you have the latest version of Node, Insomnia and MongoDB Compass installed.

Following the installation, clone this repository to the local server to allow the connection to the Database and Insomnia to function properly.

Once the repository has been connected, install the following packages in the terminal:
```
npm i moment@6.9.0 mongoose@2.29.4 express@4.18.2 
```
After installation of the packages, in the same terminal, run the application by typing:

```
npm start
```


## Deployed Link
In the Github Repository, under Environments on the right hand side, click on:
```
jate-editor-vij
```
OR

Click on the link that is deployed from Heroku:
```
https://jate-editor-vij.herokuapp.com/
```
## Socials

For details regarding the specific application, proceed to the repository:
```
https://github.com/wiju24/JATE-Editor
```

For details regarding the Github profile, click on the link: 
```
https://github.com/wiju24
```

For any questions or concerns, do not hesitate to email: 
```
vijithiran_navajeevayokan@hotmail.com
```