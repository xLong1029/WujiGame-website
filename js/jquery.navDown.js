//无极游戏-加入我们-浮动导航
$(function(){
	var $win = $(window),
	
		$navDown = $(".nav-down"),
		$navDownH = $navDown.height(),
	
		$btnDropDown = $(".btn-drop-down"),
		$btnDropDownH = $btnDropDown.height(),

		$winTop = $win.scrollTop(),		
		$nowTop = 0,
		$tempTop = $winTop - $nowTop;
		
	//浏览器滚动事件
	$win.scroll(function(){
		$winTop = $win.scrollTop();
		
		if($btnDropDown){
			if($winTop >= $navDownH)
			{
				$tempTop = $winTop - $nowTop;
				$nowTop = $winTop;
				/*alert($tempTop);*/
				
				if($tempTop <= 0){
					$navDown.removeClass("hidden");
					$btnDropDown.removeClass("show");
				}
				
				else if($tempTop > 0){
					$navDown.addClass("hidden");
					$btnDropDown.addClass("show");
				}
				
				else return false;
			}
			
			else
			{
				$navDown.removeClass("hidden");
			}
		}
		
		else return false;
	});
	
	//导航下滑按钮点击事件
	$btnDropDown.hover( function(){
		$navDown.removeClass("hidden");
		$(this).removeClass("show");
	});
});