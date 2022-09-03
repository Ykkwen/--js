const _sampleDeepClone = target => {
    if(typeof target !== 'object'||target===null) return target
    const cloneobj = Array.isArray(target)?[]:{}
    for(let prop in target){
        if(target.hasOwnProperty(prop)){
            cloneobj[prop]=_sampleDeepClone(target[prop])
        }
    }
    return cloneobj
}