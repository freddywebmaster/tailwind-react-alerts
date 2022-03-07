# Simple, beautiful and customizable alerts (beta)

`tailwind-react-alert` provides alerts out of the box with react.
this library uses `animate css` and `font awesome`, so you can customize your alerts super easy

## Content List

- Installation
- Configurations
- Usage

## Installation

`npm i tailwind-react-alert`

## Configurations

- First we import the `AlertProvider` and add it to the `index.js` or `app.js`
- then import the `styles css` in your `index.js` or `app.js`

```javascript
import { AlertProvider } from "tailwind-react-alert";
import "tailwind-react-alert/dist/index.css";
```

- This is a context so it should surround your application.

```javascript
ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Usage

- Import the hook called `useAlert`

```javascript
import { useAlert } from "tailwind-react-alert";
```

- Let's store the hook methods in a constant

```javascript
const TWRA = useAlert();
```

- if you prefer you can destruct the available methods

```javascript
const { aBorder, aContent, aSimple } = useAlert();
```

## Using `Simple` Alert

- The simple alert can receive the following properties
- Available colors and icons are at the end of the documentation.

  | Property       | Type    | Default                   |
  | -------------- | ------- | ------------------------- |
  | text           | string  | Info! Change a few things |
  | color          | string  | blue                      |
  | autoClose      | number  | 0                         |
  | animate        | string  | animate\_\_fadeInRight    |
  | animateOut     | string  | animate\_\_fadeOut        |
  | icon           | string  | info                      |
  | showIcon       | boolean | true                      |
  | showBtnDismiss | boolean | true                      |

### Example

- In this example I will fill all the properties but all are optional since it will take the default values.

```javascript
const onClickButton = () => {
  aSimple({
    text: "This is a test with CRA!!",
    icon: "success",
    color: "green",
    autoClose: 4000,
    animate: "animate__flipInX",
    animateOut: "animate__fadeOut",
    showIcon: true,
    showBtnDismiss: false,
  });
};
```

## Using `Border` Alert

- The border alert can receive the following properties
- Available colors and icons are at the end of the documentation.

| Property   | Type   | Default                   |
| ---------- | ------ | ------------------------- |
| text       | string | Info! Change a few things |
| color      | string | blue                      |
| autoClose  | number | 4000                      |
| animate    | string | animate\_\_fadeInRight    |
| animateOut | string | animate\_\_fadeOut        |
| icon       | string | info                      |

### Example

- In this example I will fill all the properties but all are optional since it will take the default values.

```javascript
const onClickButton = () => {
  aBorder({
    text: "This is a test with CRA!!",
    icon: "warning",
    color: "yellow",
    autoClose: 4000,
    animate: "animate__flipInX",
    animateOut: "animate__fadeOut",
  });
};
```

## Using `Content` Alert

- The border alert can receive the following properties
- Available colors and icons are at the end of the documentation.

| Property       | Type     | Default                            |
| -------------- | -------- | ---------------------------------- |
| title          | string   | This is a default title of alert   |
| text           | string   | This is a default text of alert :) |
| color          | string   | blue                               |
| autoClose      | number   | 0                                  |
| animate        | string   | animate\_\_flipInX                 |
| animateOut     | string   | animate\_\_fadeOut                 |
| icon           | string   | info                               |
| textBtn        | string   | View more                          |
| textBtnDismiss | string   | Dismiss                            |
| iconBtn        | string   | fa-solid fa-eye                    |
| onClickBtn     | function | ()=> console.log('clicked')        |

### Example

- In this example I will fill all the properties but all are optional since it will take the default values.

```javascript
const onClickButton = () => {
  aContent({
    title: "Save your contacts!",
    text: "This is a test with CRA!!",
    icon: "info",
    color: "sky",
    autoClose: 5000,
    animate: "animate__flipInX",
    animateOut: "animate__flipOutX",
    textBtn: "Contacts",
    textBtnDismiss: "Close",
    iconBtn: "fa-solid fa-address-book",
    onClickBtn: () => {
      alert("Hi alert!");
    },
  });
};
```

## Colors avalibles

- blue
- red
- green
- yellow
- dark
- indigo
- sky
- purple

## Icons avalibles

- info
- exclamation
- error
- warning
- question
- success
