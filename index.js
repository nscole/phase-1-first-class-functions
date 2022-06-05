// 
function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction(fn){
    return function fn(){
        return "Hello function my name is"
    };
}

/*
 describe('returnsAnAnonymousFunction()', () => {
    var fn

    before(() => {
      fn = returnsAnAnonymousFunction()
    })

    it('returns a function', () => {
      expect(fn).toBeA('function')
    })

    it('returns an anonymous function', () => {
      expect(fn.name).toEqual('')
    })
  })
*/