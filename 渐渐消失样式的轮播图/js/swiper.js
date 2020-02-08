function swiper(obj) {
    var liArr = document.querySelectorAll('.screen li')
    var index = liArr.length - 1
    var timeId = setInterval(function () {
        if (index <= 0) {
            index = liArr.length - 1
            for (var i = 0; i < liArr.length; i++) {
                liArr[i].style.opacity = '1'
            }
        }
        variableSpeed({
            element: liArr[index],
            json: {
                opacity: 0
            },
            fn: function () {
                index--
            }
        })
    }, obj.pageTurningSpeed)
}