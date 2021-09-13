# Recipe API Client

## Description

TK onboarding exercise using React to implement an interface to interact with the [Recipe CRUD API](https://github.com/clicktravel-antonrand/recipe-api/).

## Future Improvements / Known Issues
I narrowed the scope of the exercise due to time constraints, but if any of these are critical I am happy to implement:

- Lack of "Loading" spinner - Asynchronous calls (The REST requests) do not show a loading spinner. In production, I would have a progress indicator so the user knows their request is being actioned.
- REST error handling - the implementation is very happy path orientated, but in production I would consider unhappy paths for a good UX. If a request is rejected - an error message should be displayed to the user.
- Delete Button confirmation modal - The delete action should have a modal asking users to confirm they want to apply that action. As things stand, clicking the button will remove the recipe. I saw that portals may be a way of achieving this.
- Fabricator - I could clean my tests up by using Fabricator to generate random objects based on the TypeScript definitions.
- Test duplication - Some of the actions in my tests are common and would benefit from being refactored into utility classes.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Contributing
Ensure the tests pass with the following command:

`npm test`

Ensure linting is successful with the following comment:

`npm run lint`

Ensure files have been formatted correctly with the following comment:

`npm run prettier:fix`

Check types with the following comment:

`npm run typecheck`
