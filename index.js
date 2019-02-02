const isObject = obj =>
  obj && Object.prototype.toString.call(obj) === '[object Object]';

const isValidPath = path => path && path.length;

const recurseObj = (path, obj) => {
  while (path.length) {
    const prop = path.shift();
    obj = obj[prop];
    if (!obj) return `Invalid path. Property ${prop} is not defined.`;
  }
  return obj;
};

const dig = (obj, path = []) => {
  if (!isObject(obj)) {
    throw new Error(`Must input an object. Instead received: ${obj}`);
  }
  if (!isValidPath(path)) {
    throw new Error(`Must input a 'path' argument. Instead received: ${path}`);
  } else {
    return recurseObj(path, obj);
  }
};

module.exports = dig;
