import { createDomElement } from "./dom"
import { reconcileChildrenArray } from "./reconcileChildrenArray"

export const updateHostComponent = (wipFiber) => {
    if (!wipFiber.stateNode) {
        wipFiber.stateNode = createDomElement(wipFiber);
    }

    const newChildElements = wipFiber.props.children;
    reconcileChildrenArray(wipFiber, newChildElements);
}
