$(function(){
            var x = 10;
            var y = 20;
        	$("a.tooltip").mouseover(function(e){
        		var tooltip="<div id='tooltip'>" + this.title + "</div>";
        		$("body").append(tooltip);
        		$("#tooltip")
        		    .css({
                        "top": (e.pageY+y) + "px",
        		        "left": (e.pageX+x) + "px"    ///此处需设置样式如上，否则无效果
        		    }).show("fast");    //设置x，y坐标，并显示
                this.myTitle = this.title;
                this.title = "";
                var tooltip = "<div id='tooltip'>"+this.title+"</div>";    //移除<a>标签自带title提示功能    
            //显示title
        	}).mouseout(function(){
        		$("#tooltip").remove();
                this.title = this.myTitle;
        	//隐藏title
        	}).mousemove(function(e){
                $("#tooltip")
                    .css({
                        "top": (e.pageY+y) + "px",
                        "left": (e.pageX+x) + "px"
                    })
            })
            //让提示效果跟随鼠标移动而移动
        })