// 
function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

/*
describe('returnsANamedFunction()', () => {
    var fn

    before(() => {
      fn = returnsANamedFunction()
    })

    it('returns a function', () => {
      expect(fn).toBeA('function')
    })

    it('returns a named function', () => {
      expect(fn.name).toNotEqual('')
    })
*/