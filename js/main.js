function generate() {
	var code = document.getElementById('generate').value;

	try {
		window.c && window.c.destroy();
		window.c = eval('('+ code +')');
		alert("차트가 올바로 생성 되었다면, 부스의 진행요원 에게 보여주시고 추첨권을 받아가세요.");
	} catch(e){
		alert(e);
	}
}

!function() {
	var f = new eg.Flicking("#wrapper").on({
		flickEnd: function(e) {
			dot[lastIndex].classList.remove("on");
			dot[lastIndex = e.index].classList.add("on");
		}
	});

	document.querySelector("#indicator p").innerHTML =
		Array(f.getTotalCount() + 1).join("<span></span>");

	var dot = document.querySelectorAll("#indicator span");
	var lastIndex = 0;

	dot[lastIndex].classList.add("on");

	hljs.initHighlightingOnLoad();
}();