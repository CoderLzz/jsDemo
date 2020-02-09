function carousel(obj) {
    var liArr = document.querySelectorAll('.box li')
    var prev = document.querySelector('.box .prev')
    var next = document.querySelector('.box .next')
    var flag = true

    function startPosition() {
        for (var i = 0; i < liArr.length; i++) {
            liArr[i].style.opacity = obj.positions[i].opacity
            liArr[i].style.zIndex = obj.positions[i].zIndex
            liArr[i].style.width = obj.positions[i].width + 'px'
            liArr[i].style.left = obj.positions[i].left + 'px'
            liArr[i].style.top = obj.positions[i].top + 'px'
        }
    }
    startPosition()

    function init() {
        for (var i = 0; i < liArr.length; i++) {
            variableSpeed({
                element: liArr[i],
                json: obj.positions[i],
                fn: function () {
                    flag = true
                }
            })
        }
    }
    prev.addEventListener('click', function () {
        if (flag) {
            flag = false
            positions.unshift(positions.pop())
            init()
        }
    })
    next.addEventListener('click', function () {
        if (flag) {
            flag = false
            positions.push(positions.shift())
            init()
        }
    })
}