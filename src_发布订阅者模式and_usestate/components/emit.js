import React, { Component } from 'react'
class Watch {
    constructor() {
        this.events = {}
    }
    on(type, listener) {
        if (!Array.isArray(this.events[type])) {
            this.events[type] = []
        }
        this.events[type].push(listener)
    }
    emit(type, ...reset) {
        this.events[type].forEach(item => {
            item(...reset)
        })
    }
    off(type, handler) {
        if (!this.events.hasOwnProperty(type)) {
            throw new Error(`不存在${type}`)
        } 
        const eventHandler = this.events[type]
        let ind = eventHandler.indexOf(handler)
        if (ind !== -1) {
            eventHandler.splice(ind, 1)
        }
        console.log(this.events, 'event....26')
    }
}
const w = new Watch();
const msg = (msg) => {
    console.log(msg, 'msg.....')
}
w.on('ok', msg)
class Emits extends Component{ 
 
    render(){
        return(
            <div>
            <button onClick={() => w.emit('ok', [{ name: 1, id: 2 }])}>发布消息</button>
            <button onClick={() => w.off('ok', msg)}>取消订阅</button>
    
        </div>
        )
    } 
} 
   

export default Emits