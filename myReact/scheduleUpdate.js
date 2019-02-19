import * as lets from "./utils";
import { performWork } from "./performWork";

export const scheduleUpdate = (instance, partialState) => {
  lets.updateQueue.push({
    from: lets.CLASS_COMPONENT,
    instance: instance,
    partialState: partialState
  });
  requestIdleCallback(performWork);
};
