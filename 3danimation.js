/**
 * Created by Xuning on 2015/10/26.
 */
var curIndex = 1;
function next(){
    if (curIndex < 6) {
        var curPage = document.getElementById('page'+curIndex);
        curPage.style.transform = "rotateX(-90deg)";
        curIndex++;
        var nextPage = document.getElementById('page'+curIndex);
        nextPage.style.transform = "rotateX(0deg)";}
    else {
        alert("没有多余的卡片");
    }

}
function prev(){
    if (curIndex > 1) {
        var curPage = document.getElementById('page'+curIndex);
        curPage.style.transform = "rotateX(90deg)";
        curIndex--;
        var nextPage = document.getElementById('page'+curIndex);
        nextPage.style.transform = "rotateX(0deg)";
    }
    else {
        alert("没有多余的卡片");
    }


}