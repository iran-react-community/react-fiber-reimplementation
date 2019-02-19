import * as lets from "./utils";
import { workLoop } from "./workLoop";

export const performWork = deadline => {
  workLoop(deadline);
  if (lets.nextUnitOfWork || lets.updateQueue.length > 0) {
    requestIdleCallback(performWork);
  }
};
