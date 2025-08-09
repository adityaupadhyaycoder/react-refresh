import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: "myname"}, "Hii I am aditya");

// React.createElemeent ==> React Element (Js Object) => HTML Element while rendering.

const jsxHeading = <h1 id="myname">This is using by JSX.</h1>

// JSX (Transpiled before reaching the js) Parcel --> Babel (converts jsx into js )
// JSX ==> React.createElemeent ==> React Element (Js Object) => HTML Element while rendering.

// heading and jsxHeading are equivalent
console.log(jsxHeading);

const title = <h1>Title</h1>

const HeadingComponent = ()=> ( 
   <div>
    {title}
   Hii I am Heading component
   </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<HeadingComponent/>);