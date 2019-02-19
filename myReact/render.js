import { HOST_ROOT, updateQueue } from "./utils"
import { performWork } from "./performWork"

export const render = (elements, containerDom) => {
    updateQueue.push({
        from: HOST_ROOT,
        dom: containerDom,
        newProps: { children: elements }
    });
    requestIdleCallback(performWork);
}
