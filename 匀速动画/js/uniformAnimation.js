/**
 * 
 * @param {*} obj.element 发生动画的元素
 * @param {*} obj.target  元素到达的目标位置
 * @param {*} obj.attr 元素的哪个属性发生变化
 * @param {*} obj.fn 回调函数
 */
function uniformAnimation(obj) {
    clearInterval(obj.element.timeId)
    if(obj.attr=='opacity'){
        obj.element.timeId=setInterval(function(){
            var current=Number(window.getComputedStyle(obj.element)[obj.attr])
            var step=0.1
            step=current-obj.target<0?step:-step
            current+=step
            if(Math.abs(obj.target-current)<Math.abs(step)){
                clearInterval(obj.element.timeId)
                obj.element.style[obj.attr]=obj.target
                if(obj.fn){
                    obj.fn()
                }
            }else{
                obj.element.style[obj.attr]=current
            }
        },200)
    }else{
        obj.element.timeId=setInterval(function(){
            var current=parseInt(window.getComputedStyle(obj.element)[obj.attr])
            var step=15
            step=current-obj.target<0?step:-step
            current+=step
            if(Math.abs(obj.target-current)<Math.abs(step)){
                clearInterval(obj.element.timeId)
                obj.element.style[obj.attr]=obj.target+'px'
                if(obj.fn){
                    obj.fn()
                }
            }else{
                obj.element.style[obj.attr]=current+'px'
            }
        },20)
    }
}