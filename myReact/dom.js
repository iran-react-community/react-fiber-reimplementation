const isEvent = name => name.startsWith("on");
const isAttribute = name =>
  !isEvent(name) && name != "children" && name != "style";
const isNew = (prev, next) => key => prev[key] !== next[key];
const isGone = (prev, next) => key => !(key in next);

export const createDomElement = fiber => {
  const isTextElement = fiber.type === "textNode";
  const dom = isTextElement
    ? document.createTextNode("")
    : document.createElement(fiber.type);
  updateDomProps(dom, [], fiber.props);
  return dom;
};

export const updateDomProps = (dom, prevProps, nextProps) => {
  //remove eventListeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach(name => {
      const eType = name.toLowerCase().substring(2);
      dom.removeEventListener(eType, prevProps[name]);
    });

  //remove attrs
  Object.keys(prevProps)
    .filter(isAttribute)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => (dom[name] = null));

  //set attrs
  Object.keys(nextProps)
    .filter(isAttribute)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => (dom[name] = nextProps[name]));

  //set style
  prevProps.style = prevProps.style || {};
  nextProps.style = nextProps.style || {};
  Object.keys(nextProps.style)
    .filter(isNew(prevProps.style, nextProps.style))
    .forEach(key => (dom.style[key] = nextProps.style[key]));
  Object.keys(prevProps.style)
    .filter(isGone(prevProps.style, nextProps.style))
    .forEach(key => (dom.style[key] = ""));

  //add eventListeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eType = name.toLowerCase().substring(2);
      dom.addEventListener(eType, nextProps[name]);
    });
};
