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
 
Start local react: npm run start

React Component (just a JS function) -> Template, which is returned.
export default App; (at the bottom of App.js) - We always export our components so they can be imported in other files.
The App.js component is exported and then imported in the index.js file which is used to render

### Style Sheet Intro:
Typically in React apps, we have to options for stylesheets: index.css which is imported in index.js and stylesheets for
the specific component. For example, the App component has a style sheet App.css imported in App.js. Keeping our styles seperate from index and per component helps keep everything organized as the app gets more complex.


### Intro to State

- Component data which may change over time.
 - For example, a to-do list which items are added and removed
 - React would have to change the data in the component, this is state

- State can be even something like a toggle, true or false boolean. Toggling the state back and forth.
- Changing the value of a varible is not enough to display changes in state. The variable might change, but there is no reaction to it.
- When our code is being mounted in the DOM, we say the he component is being evaluated; gathering what functions and components are related.
- Yet, because it has already been evaluated making a change to a variable is not enough. React must re-evaluate in order to notice changes. Variable changes do not trigger React to re-evaluate; this is where useState hook comes in.

### Using the useState Hook

- This is a special function, useState, which is known as a React hook. There are other react hooks.
- They are just functions that do something special, and start with the word use.
- useState hook lets you create state. Whenever that state value changes, it triggers the component to be reevaluated.

### Under the hood
What happens when our react app first spins up?
- index.js runs first; it takes our component `(<App>)` and renders it to the DOM.
 - Yet, the App comonent has to be evaluated and the following JSX template has to be compiled.
 - React evaluates our app component and runs component functions, injects dynamic values into the JSX template, and connects any event handlers.
 - Now our JSX can be compiled.
 - Because browsers do not understand JSX, they must be compiled into JS.
 - The resulting JS is in a tree-like structure which is loaded into, what is known as, the Virtual DOM which uses JS DOM manupilation methods.
- So what happens to this process when we introduce state? Our App has already been evaluated and rendered in VDOM.
 - When state changes, React actually compares the new Virtual DOM with the Current VDOM for any changes and only updates those changes in the VDOM.
