const _instanceof=(target,Fn)=>{
    let proto=target.__proto__
    let prototype = Fn.prototype
    while(true){
        if(proto===null) return false
        if(proto===prototype) return true
        proto=proto.__proto__
    }
}
const Fn = function(){};
const Fn1 = function(){};
const o = new Fn();
const result = _instanceof(o, Fn) 
console.log(result)