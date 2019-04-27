$(function(){
	//video-start
	//视频
	var $video = $('#video')[0];	
        $vplay =  $('.btn-play'),
        $vpause =  $('.btn-pause'),
        $mask = $('.video-mask');
	
	//鼠标进入视频事件  
	$('.video').bind("mouseenter", function() {
		if($video.paused){
			return true;
		}	
		else if($video.play)
		{
			$vpause.fadeIn(500);
		}
		
	});
	//鼠标离开视频事件  
	$('.video').bind("mouseleave", function() {
		if($video.play)
		{
			$vpause.fadeOut();
		}
		else
			return false;
	});
	//视频播放事件  
	$vplay.on('click', function() {
		if($video.paused) {
			$video.play();
			$(this).fadeOut();
			
			$mask.hide();
		}
		else {
			return false;
		}	
	});
	//视频暂停事件  
	$vpause.on('click', function() {
		if($video.play) {
			$video.pause();
			$(this).fadeOut();
			$vplay.fadeIn();
			$mask.show();
		}
		else {
			return false;
		}	
	});
	//video-end
	
	//banner-start
	//轮播图
	var focusBanner=function(){
		var $focusBanner=$("#index-banner"),
			$bannerList=$("#index-banner-list li"),
			$focusHandle=$(".focus-handle"),
			$bannerImg=$(".index-banner-news"),
			$prevBtn=$("#prev-btn"),
			$nextBtn=$("#next-btn"),
			$focusBubble=$("#focus-bubble"),
			bannerLength=$bannerList.length,
			_index=0,
			_timer="",
			_height=100+"%";
			
			$(".index-banner-news").find("img").css("height",_height+"px");
			$focusBanner.height(_height);
			$bannerImg.height(_height);

			$(window).resize(function(){
				window.location.reload()
			});

			for(var i=0; i<bannerLength; i++){
				$bannerList.eq(i).css("zIndex",bannerLength-i);
				$focusBubble.append("<li></li>");
			}
			$focusBubble.find("li").eq(0).addClass("current");
			var bubbleLength=$focusBubble.find("li").length;
			$focusBubble.css({
				"width":bubbleLength*62,
				"marginLeft":-bubbleLength*31
			});//初始化
			
			//alert(_index);

			$focusBubble.on("click","li",function(){
				$(this).addClass("current").siblings().removeClass("current");
				_index=$(this).index();
				changeImg(_index);
			});//点击轮换

			$nextBtn.on("click",function(){
				_index++
				if(_index>bannerLength-1){
					_index=0;
				}
				changeImg(_index);
			});//下一张

			$prevBtn.on("click",function(){
				_index--
				if(_index<0){
					_index=bannerLength-1;
				}
				changeImg(_index);
			});//上一张
			
			function changeImg(_index){				
				$bannerList.eq(_index).fadeIn(250);
				$bannerList.eq(_index).siblings().fadeOut(200);				
				
				$focusBubble.find("li").removeClass("current");
				$focusBubble.find("li").eq(_index).addClass("current");
				clearInterval(_timer);
				_timer=setInterval(function(){$nextBtn.click()},5000)
			}//切换主函数
			_timer=setInterval(function(){$nextBtn.click()},5000)
	}();
	//banner-end
	
	//navDown-start
	//下拉导航
	var $win = $(window),
	
		$navDown = $(".nav-down"),
		$navDownH = $navDown.height(),
	
		$nav = $(".nav"),
	    $navH = $nav.height(),
	
		$btnDropDown = $(".btn-drop-down"),
		$btnDropDownH = $btnDropDown.height(),

		$winTop = $win.scrollTop(),		
		$nowTop = 0,
		$tempTop = $winTop - $nowTop;
		
	//浏览器滚动事件
	$win.scroll(function(){
		$winTop = $win.scrollTop();

		if($nav){
			if($winTop > $navH)
			{
				$tempTop = $winTop - $nowTop;
				$nowTop = $winTop;
				
				if($tempTop <= 0){
					$navDown.addClass("show");
					$btnDropDown.removeClass("show");
				}
				
				else if($tempTop > 0){
					$navDown.removeClass("show");
					$btnDropDown.addClass("show");
				}
				
				else{
					return false;
				}
			}
			
			else if($winTop < $navH)
			{
				$btnDropDown.removeClass("show");
				$navDown.removeClass("show");
			}
			
			else return false;
		}
		
		else return false;
		
	});
	
	//导航下滑按钮点击事件
	$btnDropDown.hover( function(){
		$navDown.addClass("show");
		$(this).removeClass("show");
	});
	//navDown-end	
})