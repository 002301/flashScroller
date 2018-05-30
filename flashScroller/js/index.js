let scrollPro =0,movie=0;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

//加载声音
var sounds={
    p0:new Howl({loop:true,src: ['bgm.mp3']}),
}

$(function(){
    
    loading();
     window.onorientationchange = hw;
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault();
 }, {passive: false});
    music()//设置音乐
})
//图片加载
function loading(){
    var loadImgsArr=[
            'images/music.png',
        ];
    var anList = AdobeAn.getComposition("A6884732E68D459480F25FAFF18F0553").getLibrary();
    for(var i in anList.properties.manifest){
        loadImgsArr.push(anList.properties.manifest[i].src);
    }
    netease.loading(loadImgsArr,function(){
        init();
    });
}
// flash初始化
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("A6884732E68D459480F25FAFF18F0553");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
    var images=comp.getImages();    
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }    
}
// flash加载完成
function handleComplete(evt,comp) {
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.main();
    stage = new lib.Stage(canvas);  
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }        
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
    scrollInit()
}
//设置滚动
function scrollInit(){
    var _totalF = (exportRoot.main.totalFrames-1)*12;
	scroller = new Scroller(function(left,top,zoom){
		console.log(scrollPro);
        scrollPro = (top/12);//减慢滑动
        // scrollPro = exportRoot.main.totalFrames-1-(top/12);//倒播
        if(scrollPro!=0){
           exportRoot.main.gotoAndStop(scrollPro); 
        }
        // 制定位置播放声音
        // if(scrollPro>213&&scrollPro<218){
        //    playS('p1')
        // }

	},{
        zooming: true,
        bouncing: false
    })
    scroller.setDimensions(stage.width, stage.height, stage.width, _totalF);
    // scroller.scrollTo(0,_totalF,false);	//倒播
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
// 使用howler框架播放音乐
// playS('p0')
function playS(s){
    var pls = sounds[s].playing();
    if(!pls){
      sounds[s].play();  
    }
}
// 音乐播放
function music(){
    sounds.p0.play();
    $('.music').click(function(){
        let _state = sounds.p0.playing()
      if(_state){
           sounds.p0.pause()
           $('.music').removeClass("play");
        }else{
            sounds.p0.play();
            $('.music').addClass("play");
        }
    });
}

function stopMusic(){
    sounds.p0.pause();
    $('.music').removeClass("play");
}


//根据客户端弹出分享
// sshare(pop($('.end')))
function sshare(endFunction){
    var client = /newsapp/i.test(navigator.userAgent);
    var f = endFunction || function(){};
    if(client=="neteasenewsapp"){
        NeteaseShare();
    }else{
        f();
    }
}
// pop($('.end'))
function pop(n,clos){
    var cl = clos||true; 
    var div="<div id='pop' pop  class='hide' "
    if(cl){
      div +=  "onclick='closePop()'";
    }
    div +="><div class='popcont' pop>"
    div +=$(n).prop("outerHTML");
    div+="</div><div class='bg'></div>"
    div+="</div>"
    $("body").prepend(div);
    $("#pop").show();
    //console.log(div);
}
//关闭弹层
function closePop(){
    $("#pop").remove();
}
//横竖屏切换
function hw(){
    var _hw = orient()
    if(_hw){
        $('.heng').hide();
    }else{
        $('.heng').show();
    }
}

//判断横竖屏切换
function orient() {
    if (window.orientation == 0 || window.orientation == 180) {
        return true;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
       return false;
    }
}