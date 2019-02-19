import { pendingCommit, nextUnitOfWork, ENOUGH_TIME } from "./utils";
import * as lets from "./utils";
import { resetNextUnitOfWork } from "./resetNextUnitOfWork";
import { performUnitOfWork } from "./performUnitOfWork";
import { commitAllWork } from "./commitAllWork";

export const workLoop = deadline => {
  if (!lets.nextUnitOfWork) {
    resetNextUnitOfWork();
  }
  while (lets.nextUnitOfWork && deadline.timeRemaining() > ENOUGH_TIME) {
    lets.nextUnitOfWork = performUnitOfWork(lets.nextUnitOfWork);
  }
  if (lets.pendingCommit) {
    commitAllWork(lets.pendingCommit);
  }
};
