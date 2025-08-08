import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const rootElement = React.createElement("div", { className: "container" }, [
  React.createElement("div", { key: "child-1", className: "child-1" }, "Child 1"),
  React.createElement("div", { key: "child-2", className: "child-2" }, [
    React.createElement("div", { key: 'child-2a', className: "child-2A" }, "Child 2A"),
    React.createElement("div", { key: 'child-2b', className: "child-2B" }, "Child 2B"),
  ]),
]);
console.log(rootElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(rootElement);
