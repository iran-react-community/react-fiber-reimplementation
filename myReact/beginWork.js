import { CLASS_COMPONENT } from "./utils";
import { updateClassComponent } from "./updateClassComponent";
import { updateHostComponent } from "./updateHostComponent";

export const beginWork = wipFiber => {
  if (wipFiber.tag == CLASS_COMPONENT) {
    updateClassComponent(wipFiber);
  } else {
    updateHostComponent(wipFiber);
  }
};
