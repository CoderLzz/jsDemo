function magnifier(obj){
    var small = document.querySelector('.small')
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big')
    var bigImg = document.querySelector('.big img')
    small.onmousemove = function (e) {
        mask.style.display = 'block'
        bigImg.style.display = 'block'
        var left = small.offsetLeft
        var top = small.offsetTop
        var spaceX = e.pageX - left
        var spaceY = e.pageY - top
        spaceX = spaceX < obj.maskWidth/2 ? obj.maskWidth/2 : spaceX
        spaceX = spaceX > small.offsetWidth-(obj.maskWidth/2) ? small.offsetWidth-(obj.maskWidth/2) : spaceX
        spaceY = spaceY < obj.maskHeight/2 ? obj.maskHeight/2 : spaceY
        spaceY = spaceY > small.offsetHeight-(obj.maskHeight/2) ? small.offsetHeight-(obj.maskHeight/2) : spaceY
        mask.style.left = spaceX - obj.maskWidth/2 + 'px'
        mask.style.top = spaceY - obj.maskHeight/2 + 'px'
        bigImg.style.width = obj.bigImgW + 'px'
        var x = (spaceX - obj.maskWidth/2) / small.offsetWidth * obj.bigImgW
        bigImg.style.marginLeft = -x + 'px'
        var y = (spaceY - obj.maskHeight/2) / small.offsetHeight * bigImg.offsetHeight
        bigImg.style.marginTop = -y + 'px'
    }
    small.onmouseleave = function () {
        mask.style.display = 'none'
        bigImg.style.display = 'none'
    }
}