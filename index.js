import myReactDOM, { myReact } from "./myReact";
import App from "./components/Main";

myReactDOM.render(
  <App title="Hello from React Fiber" />,
  document.getElementById("app")
);

/**NOTE--> my resources:
0-> https://github.com/facebook/react/tree/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src

1-> https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e

2->
 https://github.com/acdlite/react-fiber-architecture

3->
 https://makersden.io/blog/look-inside-fiber/

4->
 https://speakerdeck.com/koba04/capability-of-react-fiber?slide=41

 */
