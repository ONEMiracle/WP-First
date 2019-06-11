// 封装
function $(id) {
	return typeof id==='string'?document.getElementById(id):id;
}


window.onload = function(){
    // 动态一
    var rt_main1 = document.getElementById("rt_main1");
    var rt_main2 = document.getElementById("rt_main2");
    var rt_lf = document.getElementById("rt_lf");
    var rt_rt = document.getElementById("rt_rt");
    rt_lf.onmouseover = function(){
        rt_main2.style.display = "none";
        rt_main1.style.display = "block";
    }
    rt_rt.onmouseover = function(){
        rt_main1.style.display = "none";
        rt_main2.style.display = "block";
    }

    var fot1_l_t = $("fot1_l_t").getElementsByTagName("li");
    var fot1_l_l = $("fot1_l_l").getElementsByTagName("div");
    // 检测
    // alert(fot1_l_t.length); 
    // alert(fot1_l_l.length);
    if(fot1_l_t.length != fot1_l_t.length)
    return;
    for(var i=0;i<fot1_l_t.length;i++){
        fot1_l_t[i].id=i;
        fot1_l_t[i].onmouseover=function(){ //onclick
            // alert(this.id);
            //清除所有li上的class
            for(var j=0;j<fot1_l_t.length;j++){
                fot1_l_t[j].className='';
                fot1_l_l[j].style.display='none';
            }
            //设置当前为高亮
            this.className='fot1_select';
            fot1_l_l[this.id].style.display='block';
        }
    }

    var rt4_l_t = $("rt4_l_t").getElementsByTagName("li");
    var rt4_l_l = $("rt4_l_l").getElementsByTagName("div");
    // 检测
    // alert(fot1_l_t.length); 
    // alert(fot1_l_l.length);
    if(rt4_l_t.length != rt4_l_t.length)
    return;
    for(var i=0;i<rt4_l_t.length;i++){
        rt4_l_t[i].id=i;
        rt4_l_t[i].onmouseover=function(){ //onclick
            // alert(this.id);
            //清除所有li上的class
            for(var j=0;j<fot1_l_t.length;j++){
                rt4_l_t[j].className='';
                 rt4_l_l[j].style.display='none';
            }
            //设置当前为高亮
            this.className='rt4_select';
            rt4_l_l[this.id].style.display='block';
        }
    }
    


    var mid2_m = document.getElementById("mid2_m");
	var imgs = document.getElementsByClassName("mid2_item");
	var btns = document.getElementsByClassName("mid2_icon");
	var index = 0;
	for(var i = 0;i < btns.length ; i++){
		btns[i].onclick = function(){
			var myIndex = this.getAttribute('index');
			for(var j = 0; j < btns.length ; j++){
				imgs[j].className = "mid2_item";
				btns[j].className = "mid2_icon";
			}
			imgs[myIndex].className = "mid2_item active";
			btns[myIndex].className = "mid2_icon dif";
		}
	}
	var timer = setInterval(auto,2000);
	function auto(){
		index ++;
		if(index > btns.length){
			index = 0;
		}
		for(var k = 0; k < btns.length ; k++){
            imgs[k].className = "mid2_item";
            btns[k].className = "mid2_icon";
		}
        imgs[index].className = "mid2_item active";
        btns[index].className = "mid2_icon dif";
	}
	mid2_m.onmouseover = function(){
		clearInterval(timer);
	}
	mid2_m.onmouseout = function(){
		setInterval(auto,2000);
    }
    
    var s_top = $("s_top").getElementsByTagName("li");
    var s_middle = $("s_middle").getElementsByTagName("div");
    // 检测
    // alert(fot1_l_t.length); 
    // alert(s_middle.length);
    if(s_top.length != s_middle.length)
    return;
    for(var i=0;i<s_top.length;i++){
        s_top[i].id=i;
        s_top[i].onmouseover=function(){ //onclick
            // alert(this.id);
            //清除所有li上的class
            for(var j=0;j<s_top.length;j++){
                s_top[j].className='';
                s_middle[j].style.display='none';
            }
            //设置当前为高亮
            this.className='s_t_select';
            s_middle[this.id].style.display='block';
        }
    }
}