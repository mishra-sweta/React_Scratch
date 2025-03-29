import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Hello, world in Title!</h1>;
};

const Heading = () => (
  <div id="container">
    <Title />
    {Title()}
    <h1>Heading Component!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
