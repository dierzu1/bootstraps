/*轮播图*/
var curIndex=0;
/*下一张*/
$('#puzhen .centers .banner .banner-btn a.next').on('click',function (){
	
	add()
})
/*上一张*/
$('#puzhen .centers .banner .banner-btn a.prev').on('click',function (){
	$('#puzhen .centers .banner .picList li').eq(curIndex).css({
		'display':'none'
	})
	$('#puzhen .centers .banner .btn-list li').eq(curIndex).removeClass('active')
	curIndex--;
	if(curIndex==-1){
		curIndex=2
	}
	$('#puzhen .centers .banner .picList li').eq(curIndex).fadeIn(500);
	$('#puzhen .centers .banner .btn-list li').eq(curIndex).addClass('active')
	
})
/*btn-list按钮点击事件*/
$('#puzhen .centers .banner .btn-list li').on('mouseenter',function (){
	curIndex=$(this).index();
	$(this).addClass('active').siblings().removeClass('active')
	$('#puzhen .centers .banner .picList li').eq(curIndex).fadeIn(500).siblings().css({'display':'none'})

})
/*自定轮播*/
function add(){
	$('#puzhen .centers .banner .picList li').eq(curIndex).css({
		'display':'none'
	})
	$('#puzhen .centers .banner .btn-list li').eq(curIndex).removeClass('active')
	curIndex++;
	if(curIndex===3){
		curIndex=0
	}
	$('#puzhen .centers .banner .picList li').eq(curIndex).fadeIn(500);
	$('#puzhen .centers .banner .btn-list li').eq(curIndex).addClass('active')
}
var timer;
function play(){
	timer=setInterval(function (){
		add()
	},3000)
}

function stop(){
	clearInterval(timer)

}
play()
$('#puzhen .centers .banner').hover(function (){
	stop()
},function (){
	play()		
})


/*创新*/
$('#puzhen .centers .creative .creative-center ul>li').hover(function (){
	$(this).find('.xian').animate({
		'width':'100%'
		
	},500)
	$(this).find('.xian').css({
		'background':'#fff'
	})


	$(this).find('.bg').fadeIn(50)
	$(this).find('.bg').animate({
		'height':'100%'
	},100)
	
},function(){
	$(this).find('.xian').animate({
		'width':'50%'
	},50)
	$(this).find('.xian').css({
		'background':'#000'
	})
	
	$(this).find('.bg').fadeOut(500)
	$(this).find('.bg').animate({
		'height':'80%'
	},100)
})