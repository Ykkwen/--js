Array.prototype._filter=function(fn){
    if(typeof fn !== 'function') return
    const res = []
    for(let i =0;i<this.length;i++){
        if(fn(this[i])){
            res.push(this[i])
        }
    }
    return res
}
const arr = ['1','2','3']

console.log(arr._filter(i=>i<3))