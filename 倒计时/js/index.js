function countDown(option){
    var date=new Date(option)
    var nowDate=new Date()
    var x=date-nowDate
    var day=document.querySelector('.day')
    var hour=document.querySelector('.hour')
    var minute=document.querySelector('.minute')
    var second=document.querySelector('.second')
    day.innerText=parseInt(x/1000/60/60/24)
    hour.innerText=parseInt(x/1000/60/60%24)
    minute.innerText=parseInt(x/1000/60%60)
    second.innerText=parseInt(x/1000%60)
}