function rollCall(obj) {
    var one = document.getElementById('one')
    var two = document.getElementById('two')
    var row = document.getElementById('row')
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset')
    var liAll = document.querySelectorAll('.box li')
    var rowAll = document.querySelectorAll('.box ul')
    var timeId = null

    function random(min, max) {
        return parseInt(Math.random() * (max - min) + min)
    }

    function exclusiveness(option) {
        for (var i = 0; i < option.length; i++) {
            option[i].classList.remove('choose')
        }
    }
    one.addEventListener('click', function () {
        clearInterval(timeId)
        timeId = setInterval(function () {
            var index = random(0, liAll.length)
            exclusiveness(liAll)
            liAll[index].classList.add('choose')
        }, obj.speed)
    })
    stop.addEventListener('click', function () {
        clearInterval(timeId)
    })
    two.addEventListener('click', function () {
        timeId = setInterval(function () {
            var index1 = random(0, liAll.length)
            var index2 = random(0, liAll.length)
            while (index1 == index2) {
                index2 = random(0, liAll.length)
            }
            exclusiveness(liAll)
            liAll[index1].classList.add('choose')
            liAll[index2].classList.add('choose')
        }, obj.speed)
    })
    row.addEventListener('click', function () {
        timeId = setInterval(function () {
            var index = random(0, rowAll.length)
            exclusiveness(rowAll)
            rowAll[index].classList.add('choose')
        }, obj.speed)
    })
    reset.addEventListener('click', function () {
        clearInterval(timeId)
        exclusiveness(liAll)
        exclusiveness(rowAll)
    })
}