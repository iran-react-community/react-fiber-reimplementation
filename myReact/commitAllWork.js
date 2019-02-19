import { commitWork } from "./commitWork";
import * as lets from "./utils";

export const commitAllWork = fiber => {
  fiber.effects.forEach(f => {
    commitWork(f);
  });
  fiber.stateNode._rootContainerFiber = fiber;
  lets.nextUnitOfWork = null;
  lets.pendingCommit = null;
};
