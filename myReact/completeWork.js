import { pendingCommit, CLASS_COMPONENT } from "./utils";
import * as lets from "./utils";

export const completeWork = fiber => {
  if (fiber.tag == CLASS_COMPONENT) {
    fiber.stateNode.__fiber = fiber;
  }

  if (fiber.parent) {
    const childEffects = fiber.effects || [];
    const thisEffect = fiber.effectTag != null ? [fiber] : [];
    const parentEffects = fiber.parent.effects || [];
    fiber.parent.effects = parentEffects.concat(childEffects, thisEffect);
  } else {
    lets.pendingCommit = fiber;
  }
};
