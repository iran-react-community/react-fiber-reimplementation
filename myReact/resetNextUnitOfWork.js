import { HOST_ROOT, updateQueue, nextUnitOfWork } from "./utils";
import * as lets from "./utils";

export const resetNextUnitOfWork = () => {
  const update = updateQueue.shift();
  if (!update) {
    return;
  }

  if (update.partialState) {
    update.instance.__fiber.partialState = update.partialState;
  }

  const root =
    update.from == HOST_ROOT
      ? update.dom._rootContainerFiber
      : getRoot(update.instance.__fiber);

  lets.nextUnitOfWork = {
    tag: HOST_ROOT,
    stateNode: update.dom || root.stateNode,
    props: update.newProps || root.props,
    alternate: root
  };
};
const getRoot = fiber => {
  let node = fiber;
  while (node.parent) {
    node = node.parent;
  }
  return node;
};
