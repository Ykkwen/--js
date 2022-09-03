const permute = string =>{
    if(string.length==1){
        return [string]
    }
    let res = []
    for(let s of string ){
        let arr=string.split('').filter((i)=>{
            return i!=s
        })
        permute(arr.join('')).forEach((item)=>{
            res.push(s+item)
        })
    }
    return res
}
console.log(permute('abc'))

