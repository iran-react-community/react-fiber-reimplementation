import { scheduleUpdate } from "./scheduleUpdate";

export class Component {
  constructor(props) {
    this.props = props || {};
    this.state = this.state || {};
  }
  setState(partialState) {
    scheduleUpdate(this, partialState);
  }
}

export const createInstance = fiber => {
  const instance = new fiber.type(fiber.props);
  instance.__fiber = fiber;
  return instance;
};
