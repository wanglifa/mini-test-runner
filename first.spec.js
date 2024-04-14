import {test, run, it, expect} from "./index.js";

test.only("first test case", () => {
  console.log("first test case")
  expect(2).toBe(2)
})
it("second test case", () => {
  console.log("second test case")
  const obj = {name: 'lifa'}
  expect(obj).toEqual({name: 'lifa'})
})
run()