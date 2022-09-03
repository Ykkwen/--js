Array.prototype._map = function(fn){
    if(typeof fn !== 'function') return
    const res = []
    for(let i =0;i<this.length;i++){
        res.push(fn(this[i]))
    }
    return res
}
const arr = ['1','2','3']

console.log(arr._map(i=>i*2))