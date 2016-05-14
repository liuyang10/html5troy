var lunbo=document.getElementById("lunbo");
var ali=lunbo.getElementsByTagName("li");
var san=document.getElementById("san");
var dian=document.getElementById("dian");
var aspan=dian.getElementsByTagName("span");
var aimg=lunbo.getElementsByTagName("img");
lunbo.style.width=ali[0].offsetWidth*(ali.length+1)+"px";
aspan[0].className="dianh";
var j=1;
san.onclick=function(){
	lunbo.style.left=-j*ali[0].offsetWidth*3+"px";
	for (var i = 0; i <aspan.length; i++) {
		aspan[i].className="dianb";
	}
	aspan[j].className="dianh";
	j++
	if (j>2){
        j=0;
	}
}
for (var i = 0; i < aimg.length; i++) {
	aimg[i].onclick=function () {
		this.src=this.getAttribute("resrc");
	}
}

for (var i = 0; i < aspan.length; i++) {
	    aspan[i].index=i;
	aspan[i].onclick=function () {
		for (var i = 0; i <aspan.length; i++) {
		aspan[i].className="dianb";
	    }
	    this.className="dianh";
	    j=this.index;
	    lunbo.style.left=-this.index*ali[0].offsetWidth*3+"px";

	}
}
