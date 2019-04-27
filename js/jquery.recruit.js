$(function(){
	//float-nav-start
	//无极游戏-加入我们-浮动导航
	var $edge = 50,
	
		$win = $(window);
				
		$winH = $win.height(),
		
		$bodyW = $(document.body).width(),
		
		$wrapperW = $(".wrapper").width(),
		
		$welfareH = $(".welfare").height(),
		$recruitBgH = $(".recruit-top-bg").height(),
		
		$float_Nav = $("#float-Nav"),
		$float_Li = $float_Nav.find("li"),
		$float_NavH = $("#float-Nav").height(),
		$float_NavW = $("#float-Nav").width();
		
	var $scrollH = $recruitBgH + $welfareH - $float_NavH,
	
		$navLeft = ($bodyW - $wrapperW)/2 - $float_NavW - $edge,
		$navTop = $welfareH;
	
	//设置导航left和top值
	$float_Nav.css({"left": $navLeft+"px", "top": $navTop+"px"});
	
	//浏览器窗口大小调整
	$win.resize(function() {
		$bodyW = $(document.body).width();
		
		$navLeft = ($bodyW - $wrapperW)/2 - $float_NavW - $edge;
		$float_Nav.css("left", $navLeft+"px");
	});
	
	//浏览器滚动事件
	var $winTop = $win.scrollTop(),		
		$nowTop = 0,
		$tempTop = $winTop - $nowTop;
		
		$valueTop = 200,
	
		$programe = $("#job-programe"),
		$programeTop = $programe.offset().top - $valueTop,
		
		$art = $("#job-art"),
		$artTop = $art.offset().top - $valueTop,
		
		$scheme = $("#job-scheme"),
		$schemeTop = $scheme.offset().top - $valueTop,
		
		$test = $("#job-test"),
		$testTop = $test.offset().top - $valueTop,		
		
		$opera = $("#job-operation"),
		$operaTop = $opera.offset().top - $valueTop;
	
	$win.scroll(function(){
		$winTop = $win.scrollTop();
		if($winTop >= $scrollH)
		{
			$tempTop = $winTop - $nowTop;
			$nowTop = $winTop;
			
			$navTop = ($winH - $float_NavH)/2;
			$float_Nav.css({"position": "fixed", "top": $navTop+"px"});
			
		
			if(($winTop > $programeTop) &&($winTop < $artTop))
			{
				$float_Nav.find(".nav-programe").addClass("on").siblings().removeClass("on");
				}
	
			else if(($winTop > $artTop) &&($winTop < $schemeTop))
			{
				$float_Nav.find(".nav-art").addClass("on").siblings().removeClass("on");
				}
				
			else if(($winTop > $schemeTop) &&($winTop < $testTop))
			{
				$float_Nav.find(".nav-scheme").addClass("on").siblings().removeClass("on");
				}
				
			else if(($winTop > $testTop) &&($winTop < $operaTop))
			{
				$float_Nav.find(".nav-test").addClass("on").siblings().removeClass("on");
				}
				
			else if($winTop > $operaTop)
			{
				$float_Nav.find(".nav-operation").addClass("on").siblings().removeClass("on");
				}
				
			else return false;
			}
		else
		{
			$float_Nav.find(".nav-all").addClass("on").siblings().removeClass("on");
			$navTop = $welfareH;
			$float_Nav.css({"position": "absolute", "top": $navTop+"px"});
			}
	});
	
	//浮动导航切换效果
	$float_Li.click(function(){
		index=$(this).index();
		$(this).addClass("on").siblings().removeClass();
		$float_Li.eq(index).addClass("on").siblings().removeClass();
	});
	//float-nav-end
	
	//icon-recruit-more-start
	//点击“展开详情”事件
	var $btnMore = $(".icon-recruit-more"),
		$contReq = $(".job-requirement");
		
	$btnMore.click(function(){
		/*alert($(this).parent().parent().find($contReq).attr('class') );*/
		$(this).parent().parent().find($contReq).toggleClass("show");
		$(this).toggleClass("retact");
		});
	//icon-recruit-more-end
});