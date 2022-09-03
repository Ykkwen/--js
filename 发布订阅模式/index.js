class EventEmitter {
    constructor(){
        this.cache={}
    }
    on(name,fn){
        (this.cache[name]||(this.cache[name]=[])).push(fn)
        // console.log(this.cache)
    }
    emit(name,...arg){
        console.log(this.cache)
        if(this.cache[name]){
            // for(let item of this.cache[name]){
            //     item(...arg)
            // }
            // this.cache[name].map((fn)=>{
            //     fn(...arg)
            // })
            this.cache[name].forEach((fn)=>{
                fn(...arg)
            })
        }
    }
}

const eventBus = new EventEmitter()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }
eventBus.on('task', task1)
eventBus.on('task', task2)

setTimeout(() => {
  eventBus.emit('task')
}, 1000)
