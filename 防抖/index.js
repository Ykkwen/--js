const debounce = function(fn,delay){
    let time = null
    return function(...arg){
        if(time)
            clearTimeout(time)
        time=setTimeout(() => {
            fn(...arg)
        }, delay);
    }
}
