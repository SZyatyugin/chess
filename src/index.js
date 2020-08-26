import app from "./app/main/main.js";

const root = document.getElementById('root');

if (!root) {
  throw new Error('The root element is undefined');
}

app(root);