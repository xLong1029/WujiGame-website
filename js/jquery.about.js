$(function() {
	//history-start
	//无极游戏-无极历程滚动
	var $scrollWidth = $(".year-list").length*291,
	
		$historyW = $(".history-cont").width(),
		
		$historyList = $(".history-list"),
		
		$goLIn = $("#go-left-in"),
		$goRIn = $("#go-right-in"),
		
		$goLOut = $("#go-left-out"),
		$goROut = $("#go-right-out"),
		
		$mLeft = $historyW - $scrollWidth;

	$historyList.css({"width":$scrollWidth,"marginLeft":$mLeft});
	
	$goLIn.mouseover(function(e){ $historyList.stop().animate({marginLeft:0}, {queue: true, duration: 6500}); });
	$goLIn.mouseout(function(e){ $historyList.stop(); });
	$goRIn.mouseover(function(e){ $historyList.stop().animate({marginLeft:$mLeft}, {queue: true, duration: 6000}); });
	$goRIn.mouseout(function(e){ $historyList.stop(); });
	
	$goLOut.mouseover(function(e){ $historyList.stop().animate({marginLeft:0}, {queue: true, duration: 6500}); });
	$goLOut.mouseout(function(e){ $historyList.stop(); });
	$goROut.mouseover(function(e){ $historyList.stop().animate({marginLeft:$mLeft}, {queue: true, duration: 6000}); });
	$goROut.mouseout(function(e){ $historyList.stop(); });
	//history-end
	
	//nav-menu-start
	//菜单导航切换效果
	var $menu = $(".menu-list"),
		$menu_Li = $menu.find("li");
	
	$menu_Li.click(function(){
		index=$(this).index();
		$(this).addClass("on").siblings().removeClass();
		$menu_Li.eq(index).addClass("on").siblings().removeClass();
		/*alert($(this).children("a").attr("href"));*/
		
		var $PartName =$(this).children("a").attr("href");
		$("html,body").animate({scrollTop:$($PartName).offset().top},1000);
	});
	
	//浏览器滚动事件
	var $win = $(window),
		$testTop = 50,
	
		$about = $("#about"),
		$aboutTop = $about.offset().top - $testTop,
		
		$history = $("#history"),
		$historyTop = $history.offset().top - $testTop,
		
		$culture = $("#culture"),
		$cultureTop = $culture.offset().top - $testTop,
		
		$env = $("#environment"),
		$envTop = $env.offset().top - $testTop;
		
	$win.scroll(function(){
		var $winTop = $win.scrollTop();
		
		if(($winTop > $aboutTop) &&($winTop < $historyTop))
		{
			$menu.find(".menu-about").addClass("on").siblings().removeClass("on");
			/*alert($about.attr("id"));*/
			}

		else if(($winTop > $historyTop) &&($winTop < $cultureTop))
		{
			$menu.find(".menu-history").addClass("on").siblings().removeClass("on");
			/*alert($history.attr("id"));*/
			}
		else if(($winTop > $cultureTop) &&($winTop < $envTop))
		{
			$menu.find(".menu-culture").addClass("on").siblings().removeClass("on");
			/*alert($culture.attr("id"));*/
			}
		else if($winTop > $envTop)
		{
			$menu.find(".menu-env").addClass("on").siblings().removeClass("on");
			/*alert($env.attr("id"));*/
			}
		else return false;
	});
	//nav-menu-end
});