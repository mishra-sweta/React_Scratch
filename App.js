/*
React Element (Object) = HTML (Browser Understands)

<div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

React.createElement("name of tag", attributes, children)// if multiple children pass in []

React is a library and can be just used in a small portion of any JS application
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading); //returns a JS object and not a tag which is then replaced by root.render() into html tags

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
