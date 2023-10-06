const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function customRender(reactElement, container) {
  let domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

const container = document.querySelector("#root");

customRender(reactElement, container);
