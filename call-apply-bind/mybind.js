Function.prototype.mybind=function(target,...outarg){
    target=target||window
    const symbolkey = Symbol()
    target[symbolkey]=this
    return function(...innerarg){
        const res = target[symbolkey](...outarg,...innerarg)
        return res
    }
}
const arr =['1','2','3']
const add = 'bj'
const A ={
    name:'A',
    sayname(add,age){
        console.log('my name is:',this.name,age,add)
    }
}

const B ={
    name:'B'
}
const sayB = A.sayname.mybind(B,add)
sayB(22)

Function.prototype._bind=function(target,...outarg){
    const symbolkey = Symbol()
    target[symbolkey]=this
    return function(...innerarg){
        const res = target[symbolkey](...outarg,...innerarg)
        return res
    }
}