$(function() {
        var page = 1;
        var i = 4 ;
        $("span.next").click(function() {
            var $parent = $(this).parents("div.v_show");    //根据当前单机的元素获取到父元素
            var $v_show = $parent.find("div.v_content_list");
            var $v_content = $parent.find("div.v_content");

            var v_width = $v_content.width();
            var len = $v_show.find("li").length;
            var page_count = Math.ceil(len / i);    // 只要不是整数就往大的方向去最小整数;
        
            if( !$v_show.is(":animated") ) {     //判断“视频内容展区”是否正处于动画，（修复动画叠加bug）
            
                if (page==page_count){
                    $v_show.animate({left:'0px'},"slow");    //通过改变left的值，跳转到第一版面；
                    page = 1;
                }else {
                    $v_show.animate({left:'-='+v_width},"slow");    //改变left的值，达到每次换一个版面；
                    page++;
                }
                $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
            }       
        })
        $("span.prev").click(function() {
            var $parent = $(this).parents("div.v_show");    //根据当前单机的元素获取到父元素
            var $v_show = $parent.find("div.v_content_list");
            var $v_content = $parent.find("div.v_content");

            var v_width = $v_content.width();
            var len = $v_show.find("li").length;
            var page_count = Math.ceil(len / i);    // 只要不是整数就往大的方向去最小整数;
        
            if( !$v_show.is(":animated") ) {     //判断“视频内容展区”是否正处于动画，（修复动画叠加bug）
            
                if (page==1){
                    $v_show.animate({left:'-='+v_width*(page_count-1)},"slow");    //通过改变left的值，跳转到第一版面；
                    page = page_count;
                }else {
                    $v_show.animate({left:'+='+v_width},"slow");    //改变left的值，达到每次换一个版面；
                    page--;
                }
                $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
            }        
        })
    })    