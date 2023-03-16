# Frontend Mentor - In-browser markdown editor solution

This is a solution to the [In-browser markdown editor challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: If you're building a purely front-end project, use localStorage to save the current state in the browser that persists when the browser is refreshed
- **Bonus**: Build this project as a full-stack application

### Screenshot

![](./screenshot.png)

## Run Project Locally

In the project directory, you can run:

### `npm install`

to download dependencies.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Links

- Solution URL: [https://github.com/mvrquix/markdown-editor](https://github.com/mvrquix/markdown-editor)
- Live Site URL: [https://isaqc-markdown.web.app/](https://isaqc-markdown.web.app/)

## My process

### Built with

- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [SASS](https://www.npmjs.com/package/sass) - For styles
- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor) - For markdown editor & preview

### What I learned

Created a custom hook to retrieve window dimensions for responsive design:

```js
const useWindowDimension = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}
```

Used the useEffect hook to custoomize w/ third party components on the DOM:

```js
useEffect(() => {
	const mdInput = document.querySelector('.w-md-editor-text-input')
	if (theme === 'dark') {
		mdInput.classList.add('dark')
	} else {
		mdInput.classList.remove('dark')
	}
}, [theme])
```

### Continued development

The next step to this project would be to create a server application to persist data with endpoints for the frontend to network with. With that in place
it would make sense to centralize state management on the frontend in a redux store. I would also focus on my flexbox implementation. I know there are places where I can optimize the flex layout. For example, the "Save Changes" button in the top-bar is not very responsive. If I were to set up a CI/CD pipeline, I'd write up unit tests for each component and redux store action.

### Useful resources

- [W3Schools](https://www.w3schools.com/howto/howto_css_switch.asp) - This helped me implement the theme switch button.

## Author

- Website - [Marquis Morrow](https://isaqc.io/)
- Frontend Mentor - [@mvrquix](https://www.frontendmentor.io/profile/mvrquix)
- Linkedin - [@marquismorrow](https://www.linkedin.com/in/marquismorrow/)
