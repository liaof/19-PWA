function createEl(htmlString, attrs, ...children) {
    if (typeof htmlString !== "string") {
      throw Error("Argument 'htmlString' is required and must be a string");
    }
  
    const el = document.createElement(htmlString);
  
    if (typeof attrs === "object") {
      for (let key in attrs) {
        if (key.substring(0, 2) === "on") {
          el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
        } else {
          el.setAttribute(key, attrs[key]);
        }
      }
    }
  
    children.forEach(function(child) {
      let node;
  
      if (child.constructor.name.includes("Element")) {
        node = child;
      } else {
        node = document.createTextNode(child);
      }
  
      el.appendChild(node);
    });
  
    return el;
}

module.exports = createEl;

  //createEl dynamically generates HTML DOM elements and attributes based on the inputs or arguements passed into it