var li = document.querySelector('.tabHeader').getElementsByClassName('tabPage')
var content = document.querySelector('.tab').getElementsByClassName('content')
class Tab {
    constructor() {

    }
}
Tab.init = function () {
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute('data-index', i)
        li[i].onclick = function () {
            for (var j = 0; j < li.length; j++) {
                li[j].classList.remove('now')
            }
            this.classList.add('now')
            var index = this.getAttribute('data-index')
            for (var k = 0; k < content.length; k++) {
                content[k].classList.remove('active')
            }
            content[index].classList.add('active')
        }
    }
}