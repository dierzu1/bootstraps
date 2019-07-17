/*导航*/
	/*动态获取width*/

function getWidth(){
	$('#puzhen .headers nav .container .nav-list ul.nav>li.dropdown').each(function (index,item){
		console.log($(this).offset().left,$(document).outerWidth())
		var curWidth=$(document).outerWidth()-$(this).offset().left;
		$(this).find('ul.dropdown-menu').css({
			'width':curWidth+'px'
		})
	})
} 
getWidth()



$('#puzhen .headers nav .container .nav-list ul.nav>li.dropdown').hover(function (ev){
	$(this).addClass('open')
},function (){
	$(this).removeClass('open')
})
$(window).resize(function (){
	getWidth()
})