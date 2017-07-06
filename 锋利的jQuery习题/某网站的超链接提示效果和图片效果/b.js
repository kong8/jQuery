$(function(){
            var x = 10;
            var y = 20;
        	$("a.tooltip").mouseover(function(e){
                this.myTitle = this.title;
                this.title = "";    //移除<a>标签自带title提示功能
                var imgTitle = this.myTitle? "<br/>" + this.myTitle : "" ;    //获取图片相应的介绍文字
        		var tooltip = "<div id='tooltip'><img src='"+ this.href +"' alt='产品预览图'/>"+imgTitle+"</div>";
        		$("body").append(tooltip);
        		$("#tooltip")
        		    .css({
                        "top": (e.pageY+y) + "px",
        		        "left": (e.pageX+x) + "px"    ///此处需设置样式如上，否则无效果
        		    }).show("fast");    //设置x，y坐标，并显示
       
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