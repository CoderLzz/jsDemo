function dialog() {
    var text = document.querySelector('.text')
    var mask = document.querySelector('.mask')
    var dialog = document.querySelector('.dialog')
    text.addEventListener('click', function () {
        mask.style.display = 'block'
        dialog.style.display = 'block'
    })
    mask.addEventListener('click', function () {
        mask.style.display = 'none'
        dialog.style.display = 'none'
    })
    dialog.addEventListener('mousedown', function (e) {
        var spaceX = e.clientX - dialog.offsetLeft
        var spaceY = e.clientY - dialog.offsetTop

        function handle(e) {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            var moveX = e.clientX - spaceX
            var moveY = e.clientY - spaceY
            dialog.style.left = moveX + 'px'
            dialog.style.top = moveY + 'px'
        }
        document.addEventListener('mousemove', handle)
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', handle)
        })

    })
}