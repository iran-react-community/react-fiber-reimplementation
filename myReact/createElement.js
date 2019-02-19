export const myReact = (type, options, ...args) => {
  const props = Object.assign({}, options);
  const children = args.length > 0 ? [].concat(...args) : [];
  props.children = children
    .filter(child => child != null && child !== false)
    .map(child =>
      child instanceof Object
        ? child
        : myReact("textNode", { nodeValue: child })
    );
  return { type, props };
};
