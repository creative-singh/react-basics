const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World!"
);

const parentNode = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello inside child H1"
    ),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello inside child H2"
    ),
  ])
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(parentNode);
// root.render(heading);
