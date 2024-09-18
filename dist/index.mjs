// src/index.ts
import * as _ from "lodash";
var lodashStringify = (obj) => {
  if (_.isNull(obj)) {
    return "null";
  }
  if (_.isString(obj)) {
    return `"${obj}"`;
  }
  if (_.isNumber(obj) || _.isBoolean(obj)) {
    return obj.toString();
  }
  if (_.isArray(obj)) {
    const arrayItems = obj.map((item) => lodashStringify(item));
    return `[${arrayItems.join(",")}]`;
  }
  if (_.isObject(obj)) {
    const objectKeys = Object.keys(obj);
    const keyValuePairs = objectKeys.map((key) => {
      const keyString = `"${key}"`;
      const valueString = lodashStringify(obj[key]);
      return `${keyString}:${valueString}`;
    });
    return `{${keyValuePairs.join(",")}}`;
  }
  return void 0;
};
export {
  lodashStringify
};
