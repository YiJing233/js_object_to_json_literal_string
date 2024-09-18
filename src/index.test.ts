import { expect, test } from "vitest";
import { lodashStringify } from './index';

test("init", () => {
// 测试
const obj = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
};
  expect(lodashStringify(obj)).toBe("{\"name\":\"John\",\"age\":30,\"isAdmin\":false,\"courses\":[\"html\",\"css\",\"js\"],\"wife\":null}")
})

test("init-test", () => {
  // 测试
const testValue = {
  'avatar': 'https://ui-avatars.com/api/?size=128',
  'name': 'nihao',
  'info': {
    "label": 'nihao',
    "value": '1234reffdsfaf',
    'avatar_url': 'https://ui-avatars.com/api/?size=128',
  }
}
    expect(lodashStringify(testValue)).toBe("{\"avatar\":\"https://ui-avatars.com/api/?size=128\",\"name\":\"nihao\",\"info\":{\"label\":\"nihao\",\"value\":\"1234reffdsfaf\",\"avatar_url\":\"https://ui-avatars.com/api/?size=128\"}}")
  })