function getScroll(){
    return {
        left:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,
        top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop
    }
}