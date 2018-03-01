$(function(){
    init();
})

let scrollPro =0;

function scrollInit(){
	scroller = new Scroller(function(left,top,zoom){
		console.log(scrollPro);
        // scrollPro = parseInt(top);
        scrollPro = (top);
        exportRoot.gotoAndStop(scrollPro);
	},{
        zooming: true,
        bouncing: false
    })

    contentLength = exportRoot.totalFrames-1;
    scroller.options.animationDuration=150;
	scroller.setDimensions(stage.width, stage.height, stage.height, contentLength);
	
	//添加触屏事件
	var mousedown = false;
    document.addEventListener("touchstart", function(e) {
        scroller.doTouchStart(e.touches, e.timeStamp);
        mousedown = true;
    }, false);

    document.addEventListener("touchmove", function(e) {
    	e.preventDefault();
        if (!mousedown) {
            return;
        }
        scroller.doTouchMove(e.touches, e.timeStamp);
        mousedown = true;
    }, false);

    document.addEventListener("touchend", function(e) {
        if (!mousedown) {
            return;
        }
        scroller.doTouchEnd(e.timeStamp);
        mousedown = false;
    }, false);
}
