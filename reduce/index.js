Array.prototype._reduce=function(fn){
    if(typeof fn !=='function') return
    let res = 0
    for(let i = 0;i<this.length;i++){
        res = fn(res,this[i])
    }
    return res
}

console.log([1,2,3]._reduce((left, right) => left + right))