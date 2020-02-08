function nav() {
    var liArr = document.querySelectorAll('.nav ul li')
    var cloud = document.querySelector('.cloud')
    var nav = document.querySelector('.nav')
    var index = 0
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].setAttribute('data-index', i)
        liArr[i].onmouseover = function () {
                variableSpeed({
                    element: cloud,
                    json: {
                        left: this.offsetLeft + 10
                    }
                })
            },
            nav.onmouseout = function () {
                if (index == 0) {
                    variableSpeed({
                        element: cloud,
                        json: {
                            left: liArr[index].offsetLeft
                        }
                    })
                } else {
                    variableSpeed({
                        element: cloud,
                        json: {
                            left: liArr[index].offsetLeft + 10
                        }
                    })
                }

            }
        liArr[i].onclick = function () {
            index = this.getAttribute('data-index')
        }
    }
}