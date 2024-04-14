

const tests = []
const onlys = []
const beforeAlls = []
const beforeEachs = []
export function beforeAll(callback) {
  beforeAlls.push(callback)
}
export function beforeEach(callback) {
  beforeEachs.push(callback)
}
export function test(name, callback) {
  tests.push({name, callback})
}
export const it = test
test.only = function(name, callback) {
  onlys.push({name, callback})
}
export function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
      } else {
        throw new Error(`fail actual:${actual} expected: ${expected}`)
      }
    },
    toEqual(expected) {
      if (JSON.stringify(expected) === JSON.stringify(actual)) {
      } else {
        throw new Error(`fail actual:${actual} expected: ${expected}`)
      }
    }
  }
}
export function run() {
  for (const beforeAllCallback of beforeAlls) {
    beforeAllCallback()
  }
  const suit = onlys.length > 0? onlys : tests
  for(const test of suit) {
    for(const beforeEachCallback of beforeEachs) {
      beforeEachCallback()
    }
    try {
      test.callback()
      console.log(`ok: ${test.name}`)
    } catch (error) {
      console.log(`fail: ${error}`)
    }
  }
}