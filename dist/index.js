"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  lodashStringify: () => lodashStringify
});
module.exports = __toCommonJS(src_exports);
var _ = __toESM(require("lodash"));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  lodashStringify
});
