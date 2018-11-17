function test1() {
    var a;
    a=5;
    document.getElementById("test1").innerHTML=
    "a="+a;
}
function test2() {
	var a,b,c;
	a=1;
	b=1;
	c=2;
	document.getElementById("test2").innerHTML=
	"a=b输出为:"+(a==b)+"<br>"+"a=c输出为:"+(a==c);
}
function test3() {
	var a=1,b=2,t=0;
	t=a;
	a=b;
	b=t;
	document.getElementById("test3").innerHTML=
	"初始a=1、b=2,交换后："+"a="+a+"、"+"b="+b;
}
function test4() {
	var arr=[1,2,3,4];
	var i=0;
	for(i;i<=3;i++)
	{
		document.write(arr[i]+" ");
	}

}
function test5() {
	var a="123";
	var b=123;
	if(typeof a==typeof b)
	{
		document.write(a==b);
	}
	else
	{
		b=b.toString();
		document.getElementById("test5").innerHTML=a+"<br>"+"b转换为数组："+b;

	}
	alert("该数组长度为"+b.length);
}

function test6() {
    var arr=[1,2,3,4] , str='hello,world';
    var arr_1=str.toString() , str_1=arr.join("-");
    document.getElementById("test6").innerHTML=
    "数组变为字符串：" + (str_1) + "<br>" + "'hello,world'变为数组:" +(arr_1);
    alert("'arr_1'数组长度为：" + arr_1.length);
}
