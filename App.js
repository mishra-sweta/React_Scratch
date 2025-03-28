import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: 1 }, [
    React.createElement("h1", { key: 1 }, "I'm a h1 Sweta Mishra"),
    React.createElement("h2", { key: 2 }, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: 2 }, [
    React.createElement("h1", { key: 1 }, "I'm a h1 tag"),
    React.createElement("h2", { key: 2 }, "I'm a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(heading); //returns a JS object and not a tag which is then replaced by root.render() into html tags

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
