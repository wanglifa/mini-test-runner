import {test, it, expect, beforeAll, beforeEach, afterEach, afterAll} from "./core.js";
beforeAll(() => {
  console.log('before all')
})
beforeEach(() => {
  console.log('before each')
})
afterEach(() => {
  console.log('after each')
})
afterAll(() => {
  console.log('after all')
})
test("first test case", () => {
  console.log("first test case")
  expect(2).toBe(2)
})
it("second test case", () => {
  console.log("second test case")
  const obj = {name: 'lifa'}
  expect(obj).toEqual({name: 'lifa'})
})