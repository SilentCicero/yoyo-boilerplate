## yoyo-boilerplate

yoyo + redux = heaven.

A boilerplate for those who want to live in the mountains alone.. isolated from everyone... in a crazy low-dependency lifestyle...

## Install

```
git clone http://github.com/silentcicero/yoyo-boilerplate
cd yoyo-boilerplate
npm install
```

## Start

```
npm start
```

## Features

 - Offline/Client-Side First
 - Fast yoyo templating, dom-diffing
 - No JSX, just ES6 babel transpiling
 - 3x lighter than React/React-Boilerplate
 - Single immutable state (via `seamless-immutable`)
 - Stateless function component philosophy
 - Styled-elements (based on styled-components)
 - State: Redux + Selectors + Redux-Logic (for side-effects)
 - Full i18n support (node-polyglot)
 - Webpack + Webpack-Dev-Server environment
 - Container/Component philosophy
 - Code generators/Build to Surge.sh =D
 - Dynamic `flex-box` grid system
 - In-component Metadata handlers
 - Form validation models (like redux-form but tiny)
 - Easy routing with `sheet-router`

## Cons

 - Template rendering forced on user at runtime
 - `<MyComponent></MyComponent>` not `<MyComponent />`.. but not for long (if `hyperx` changes)
 - No internal component lifecyles (all redux/single state/stateless functions)
 - No react ecosystem

 ## Build

```
npm run build
```

 ## Test

```
npm run test
```

## Surge

Change surge address in package.json..

```
npm run surge
```
