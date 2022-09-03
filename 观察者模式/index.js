// 1. 被观察者构造函数需要包含"name"属性和"state"属性且"state"初始值为"走路"
// 2. 被观察者创建"setObserver"函数用于保存观察者们
// 3. 被观察者创建"setState"函数用于设置该观察者"state"并且通知所有观察者
// 4. 观察者创建"update"函数用于被观察者进行消息通知，该函数需要打印（console.log）数据，数据格式为：小明正在走路。其中"小明"为被观察者的"name"属性，"走路"为被观察者的"state"属性

class Observerd {
    constructor(name){
        this.name=name
        this.state='走路'
        this.observers=[]
    }
    //保存观察者
    setObserver(observer){
        this.observers.push(observer)
    }
    //设置state,并通知所有观察者
    setState(state){
        this.state=state
        this.observers.forEach((obs)=>obs.update(this))
    }
}

class Observer {
    constructor(){}
    update(observerd) {
        console.log(observerd.name+'正在'+observerd.state)
    }
}