Function.prototype.mycall=function(target,...arg){
    target=target||window
    const symbolkey = Symbol()
    target[symbolkey]=this
    const res = target[symbolkey](...arg)
    delete target[symbolkey]
    return res
}

const arr = ['AAA','BBB']
const A ={
    name:'A',
    say(o1,o2){
        console.log('my name is:',this.name,o1,o2)
    }
}
const B = {
    name:'B'
}
A.say.mycall(B,...arr)
// console.log(A.say.__proto__.mycall)

Function.prototype._call=function(target,...arg){
    const symbolkey = Symbol()
    target[symbolkey]=this
    const res = target[symbolkey](...arg)
    delete target[symbolkey]
    return res
}