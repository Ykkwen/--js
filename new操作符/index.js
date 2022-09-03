const _new = function(constructor,...arg){
    const obj = {}
    obj.__proto__=constructor.prototype
    const res = constructor.apply(obj,arg)
    return res instanceof Object ? res:obj
}

const foo = {bar:1}
with(foo){
    var bar = 2
}
console.log(foo.bar)