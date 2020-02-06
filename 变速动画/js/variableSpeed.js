function variableSpeed(obj) {
    clearInterval(obj.element.timeId)
    obj.element.timeId = setInterval(function () {
        var flag=true
        for (var attr in obj.json) {
            if (attr == 'opacity') {
                var target=obj.json[attr]*100
                var current=Number(window.getComputedStyle(obj.element)[attr])*100
                var step=current>target?Math.floor((target-current)/10):Math.ceil((target-current)/10)
                current=current+step
                obj.element.style[attr]=current/100
            }else if(attr=='zIndex'){
                obj.element.style[attr]=obj.json[attr]
            } else {
                if(window.getComputedStyle(obj.element)[attr]){
                    var target=obj.json[attr]
                    var current = parseInt(window.getComputedStyle(obj.element)[attr])
                    var step = current<target?Math.ceil((target - current) / 10):Math.floor((target - current) / 10)
                    current += step
                    obj.element.style[attr]=current+'px'
                }else{
                    var target=obj.json[attr]
                    var current=parseInt(obj.element[attr])
                    var step = current<target?Math.ceil((target - current) / 10):Math.floor((target - current) / 10)
                    current += step
                    obj.element[attr]=current
                }
            }
            if(current!=target){
                flag=false
            }
        }
        if(flag){
            clearInterval(obj.element.timeId)
            if(obj.fn){
                obj.fn()
            }
        }
    }, 20)
}