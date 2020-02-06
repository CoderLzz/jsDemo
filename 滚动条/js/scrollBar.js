function scrollBar() {
    var box = document.querySelector('.box')
    var content = document.querySelector('.content')
    var bar = document.querySelector('.bar')
    var scrollBar = document.querySelector('.bar .scroll')
    scrollBar.style.height = box.offsetHeight / content.offsetHeight * bar.offsetHeight + 'px'
    scrollBar.onmousedown = function (e) {
        var spaceY = e.clientY - scrollBar.offsetTop
        document.onmousemove = function (e) {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            var moveY = e.clientY - spaceY
            moveY = moveY > 0 ? moveY: 0
            moveY = moveY < bar.offsetHeight - scrollBar.offsetHeight ? moveY : bar.offsetHeight - scrollBar.offsetHeight
            scrollBar.style.top = moveY + 'px'
            var contentY = moveY / bar.offsetHeight * content.offsetHeight
            content.style.marginTop = -contentY + 'px'
        }
    }
    document.onmouseup = function () {
        document.onmousemove = null
    }
}