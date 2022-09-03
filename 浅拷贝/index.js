const _shallowClone =(target)=>{
    if(typeof target !== 'object'||target ===null) return target
    const obj = Array.isArray(target)? []:{}
    for(let prop in target){
        obj[prop]=target[prop]
    }
    return obj
}
// const o1 = {
//     name: 'g', 
//     age: 18, fn: function(){}, 
//     a: [1,2], 
//     o: {name: 'o'}
// };
const o1 = ['1','2']
const o2 = _shallowClone(o1);
//     o1.name = 'z';
// const result = o2.name === 'g' 
// console.log(result)

console.log('o1',o1)
console.log('o2',o2)

