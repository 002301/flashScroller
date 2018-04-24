$(function(){
    init();
})

let scrollPro =0,movie=0;

function scrollInit(){
	scroller = new Scroller(function(left,top,zoom){
		console.log(scrollPro);
        scrollPro = (top/8);//减慢滑动
        if(scrollPro!=0){
           exportRoot.main.gotoAndStop(scrollPro); 
        }

	},{
        zooming: true,
        bouncing: false
    })
    contentLength = (exportRoot.main.totalFrames-1)*8;
    console.log((exportRoot.main.totalFrames-1)*8)
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

// 音乐播放
function music(s){
    var flag = false;
    $(document).bind('touchstart', function(){
        if (!flag) {
          $('#mp3')[0].play();
          $('.music').addClass("play");
          flag = true;
        }
    });
    $('.music').click(function(){
      if(!$('#mp3')[0].paused){
           $('#mp3')[0].pause();
           $('.music').removeClass("play");
        }else{
            $('#mp3')[0].play();
            $('.music').addClass("play");
        }
    });
}

function stopMusic(){
    $('#mp3')[0].pause();
    $('.music').removeClass("play");
}