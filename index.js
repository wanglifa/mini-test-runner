

const tests = []
const onlys = []
const beforeAlls = []
export function beforeAll(callback) {
  beforeAlls.push(callback)
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
        console.log('ok')
      } else {
        throw new Error(`fail actual:${actual} expected: ${expected}`)
      }
    },
    toEqual(expected) {
      if (JSON.stringify(expected) === JSON.stringify(actual)) {
        console.log('ok')
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
    test.callback()
  }
}