import { updateDomProps } from "./dom";
import { commitDeletion } from "./commitDeletion";
import {
  HOST_ROOT,
  CLASS_COMPONENT,
  HOST_COMPONENT,
  DELETION,
  UPDATE,
  PLACEMENT
} from "./utils";

export const commitWork = fiber => {
  if (fiber.tag == HOST_ROOT) {
    return;
  }

  let domParentFiber = fiber.parent;
  while (domParentFiber.tag == CLASS_COMPONENT) {
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber.stateNode;

  if (fiber.effectTag == PLACEMENT && fiber.tag == HOST_COMPONENT) {
    domParent.appendChild(fiber.stateNode);
  } else if (fiber.effectTag == UPDATE) {
    updateDomProps(fiber.stateNode, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag == DELETION) {
    commitDeletion(fiber, domParent);
  }
};
