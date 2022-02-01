# My Notes

nano - crud for terminal

VS Code issue (no terminal code): Command Palette > Shell Command > Unistall/Reinstall from PATH

npx is node package manager for temporarily using a package instead of installing it locally.
npx also runs the package with any arguments.
For example: npx create-react-app name-of-project
create-react-app is a package which installs all dependencies for a React  SAP (single page application).

Using './something' is telling the program to look in the same directory as the current file. 

# Directory/structure of React App:
node_modules: stores all project dependencies and packages
public: files public to the browser
- manifest is used for local delploy (?)
- robots.txt is used for search engine web crawlers
- index.html: the single file served to the browser. Note the root div, our react app will be injected here.
src:
- Where all of the react source code and components will live here.
- Compiled together
- App.js: a react component file. Each component will have its own file.
- App.css: used to style the app component
- index.css: global style sheet
- logo.svg: image being used inside the app.js component
- Testing Files: measure our apps performance.
- App.test.js: testing compnents
- setupTests.js: sets up our files for testing
- reportWebVitals: measures performance of our app by analizing certain metrics
- index.js: kickstarts our react app. imports packages from node_modules, import React from 'react'. NOTICE: the reportWebVitals is also imported here and called via the function at the bottom. Make sure to remove if not utilziing or have deleted that file.
- ReactDom render method is also being used. Takes a component as its first argument, in this case the App component from our App import (App.js). As the second argument, takes in a DOM node. NOTE: this renders the node on the element listed, root, which is in our html file.
 - React.StrictMode, a react component built-in. Wrapping our component in this preforms additional error checks for us and highlight these in runtime.
package-lock and package track dependencies, which we have installed into our project and stored in node_modules. Keeps track of the versions we are using. Version numbers are listed here and some scripts which are used to run and build our app.
 
 npm run start

React Component (just a JS function) -> Template, which is returned.
export default App; (at the bottom of App.js) - We always export our components so they can be imported in other files.
The App.js component is exported and then imported in the index.js file which is used to render

### Style Sheet Intro:
Typically in React apps, we have to options for stylesheets: index.css which is imported in index.js and stylesheets for
the specific component. For example, the App component has a style sheet App.css imported in App.js. Keeping our styles seperate from index and per component helps keep everything organized as the app gets more complex.