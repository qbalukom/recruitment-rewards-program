# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Developer comments

- I assumed the dates are always in iso format, thus can be easily parsed as a string in most cases
- I assumed numbers are integers, otherwise extra rounding would have to applied when calculating "number of dollars above a threshold"
- I wasn't sure what was expected by "avoid additional frameworks", so I tried to limit any extenal libraries, however `react-router-dom` is so ubiquitous I thought it shouldn't be a problem and it does provide
- I opted for a simple hook-base approach to fetching from API, however for more complex sites I would most probably implement it either as a context, or using state-holding libraries (such as recoil or redux) which I opted out of because of the above
- I didn't test *all* the components, as I assumed the idea was to present the ability to write test rather than provide a full-fledged product
- Likewise I skipped on using libraries such as `rambda`, which provides a lot of helper functions (for example for sorting)
