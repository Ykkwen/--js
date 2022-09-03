Object.prototype._objectFreeze=function(obj){
    for(let prop in obj){
        const type = typeof obj[prop]
        if(type=='Object'){
            _objectFreeze(obj[prop])
        }else{
            Object.defineProperty(obj,prop,{
                configurable:false,
                writable:false
            })
        }
    }
    Object.seal(obj)
}

const o = {
    name:'z', 
    fn:function() {}
};
_objectFreeze(o);
o.name = 'g';
o.fn = 1;
o.o = 1;
const result = o.name === 'z' 
console.log(o)