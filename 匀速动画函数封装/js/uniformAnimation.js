/**
 * 
 * @param {*} element 发生动画的元素
 * @param {*} target  元素到达的目标位置
 * @param {*} attr 元素的哪个属性发生变化
 * @param {*} fn 回调函数
 */
function uniformAnimation(element, target,attr,fn) {
    clearInterval(element.timeId)
    if(attr=='opacity'){
        element.timeId=setInterval(function(){
            var current=Number(window.getComputedStyle(element)[attr])
            var step=0.1
            step=current-target<0?step:-step
            current+=step
            if(Math.abs(target-current)<Math.abs(step)){
                clearInterval(element.timeId)
                element.style[attr]=target
                if(fn){
                    fn()
                }
            }else{
                element.style[attr]=current
            }
        },200)
    }else{
        element.timeId=setInterval(function(){
            var current=parseInt(window.getComputedStyle(element)[attr])
            var step=15
            step=current-target<0?step:-step
            current+=step
            if(Math.abs(target-current)<Math.abs(step)){
                clearInterval(element.timeId)
                element.style[attr]=target+'px'
                if(fn){
                    fn()
                }
            }else{
                element.style[attr]=current+'px'
            }
        },20)
    }
}