/*导航*/
$('#puzhen .headers nav .container .nav-list ul.nav>li.dropdown').hover(function (ev){
	console.log(ev.pageX)
	$(this).addClass('open')
	$(this).css({
		'position':'static'
	})
	$(this).find('ul.dropdown-menu').css({
		'left':ev.pageX+'px'
	})
},function (){
	$(this).removeClass('open')
})