import { createInstance } from "./component";
import { render } from "./render";
import { reconcileChildrenArray } from "./reconcileChildrenArray";
import { cloneChildFibers } from "./cloneChildFibers";

export const updateClassComponent = wipFiber => {
  let instance = wipFiber.stateNode;
  if (instance == null) {
    instance = wipFiber.stateNode = createInstance(wipFiber);
  } else if (wipFiber.props == instance.props && !wipFiber.partialState) {
    cloneChildFibers(wipFiber);
    return;
  }

  instance.props = wipFiber.props;
  instance.state = Object.assign({}, instance.state, wipFiber.partialState);
  wipFiber.partialState = null;

  const newChildElements = wipFiber.stateNode.render();
  reconcileChildrenArray(wipFiber, newChildElements);
};
