function swiper(obj) {
    var ol = document.querySelector('.screen ol')
    var ulLi = document.querySelectorAll('.screen ul li')
    var ul = document.querySelector('.screen ul')
    var screen = document.querySelector('.screen')
    var screenW = document.querySelector('.screen').offsetWidth
    var prev = document.querySelector('.left')
    var next = document.querySelector('.right')
    var index = 0
    var flag = true
    for (var i = 0; i < ulLi.length - 1; i++) {
        var olLi = document.createElement('li')
        olLi.setAttribute('data-index', i)
        ol.appendChild(olLi)
    }
    var olLiArr = document.querySelectorAll('.screen ol li')
    for (var j = 0; j < olLiArr.length; j++) {
        olLiArr[0].classList.add('active')
        olLiArr[j].addEventListener('click', function () {
            for (var k = 0; k < olLiArr.length; k++) {
                olLiArr[k].classList.remove('active')
            }
            this.classList.add('active')
            index = this.getAttribute('data-index')
            variableSpeed({
                element: ul,
                json: {
                    left: -index * screenW
                }
            })
        })
    }
    prev.onclick = function () {
        if (flag) {
            flag = false
            if (index <= 0) {
                index = ulLi.length - 1
                ul.style.left = -index * screenW + 'px'
            }
            index--
            variableSpeed({
                element: ul,
                json: {
                    left: -index * screenW
                },
                fn: function () {
                    flag = true
                }
            })
            for (var k = 0; k < olLiArr.length; k++) {
                olLiArr[k].classList.remove('active')
            }
            olLiArr[index].classList.add('active')
        }
    }
    next.onclick = function () {
        if (flag) {
            flag = false
            if (index >= ulLi.length - 1) {
                index = 0
                ul.style.left = -index * screenW + 'px'
            }
            index++
            variableSpeed({
                element: ul,
                json: {
                    left: -index * screenW
                },
                fn: function () {
                    flag = true
                }
            })
            for (var k = 0; k < olLiArr.length; k++) {
                olLiArr[k].classList.remove('active')
            }
            if (index >= ulLi.length - 1) {
                olLiArr[0].classList.add('active')
            } else {
                olLiArr[index].classList.add('active')
            }
        }
    }
    var run = function () {
        next.click()
    }
    var timeId = setInterval(run, obj.pageTurningSpeed)
    screen.onmouseover = function () {
        prev.style.display = 'block'
        next.style.display = 'block'
        clearInterval(timeId)
    }
    screen.onmouseout = function () {
        prev.style.display = 'none'
        next.style.display = 'none'
        timeId = setInterval(run, obj.pageTurningSpeed)
    }
}