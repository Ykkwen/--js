const _completeDeepClone = (target, map = new Map()) => {
    if(typeof target !=='object'||target===null) return target
    const cloneobj = Array.isArray(target)?[]:{}
    //相较简易深拷贝 
    //1.判断是否是函数日期正则es6新对象: 若是,则返回 new 该对象的构造函数(target)
    //2.判断是否存在循环引用,判断map里是否存在,若存在,则说明循环引用,返回map里的值,否则.设置为true标记
    //3.注意 递归传参数要带上map
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(target.constructor.name))
        return new target.constructor(target)
    if(map.get(target))
        return map.get(target)
    map.set(target,true)

    for(let prop in target){
        if(target.hasOwnProperty(prop)){
            cloneobj[prop]=_completeDeepClone(target[prop],map)
        }
    }
    return cloneobj
}
const o1 = {
    name: 'g', 
    age: 18, 
    o: {name: 'o'}, 
    a: [1,2], 
    r: new RegExp(), 
    d: new Date()};
    o1.self = o1;
    const o2 = _completeDeepClone(o1);
    o1.name = 'z';
    o1.age = 1;
console.log(o1.name !== o2.name)