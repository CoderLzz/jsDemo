function accordion() {
    var liArr = document.querySelectorAll('.box li')
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].onmouseover = function () {
            for (var j = 0; j < liArr.length; j++) {
                variableSpeed({
                    element: liArr[j],
                    json: {
                        width: 50
                    }
                })
            }
            variableSpeed({
                element: this,
                json: {
                    width: 800
                }
            })
        }
        liArr[i].onmouseout = function () {
            for (var j = 0; j < liArr.length; j++) {
                variableSpeed({
                    element: liArr[j],
                    json: {
                        width: 200
                    }
                })
            }
        }
    }
}