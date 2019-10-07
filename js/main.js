function generate() {
	var code = document.getElementById('generate').value;

	try {
		window.c && window.c.destroy();
		window.c = eval('(' + code + ')');
	} catch(e) {}

	if (c.internal.config.data_type === currentType) {
		document.querySelector("button").style.backgroundColor = "green";
		alert("짝짝~! 미션을 성공 하셨습니다. :)");

	} else {
		alert("다시 시도해 주세요~!\n'"+ currentType +"' 유형의 차트를 생성해 주셔야 합니다.");
	}
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var types = ["line", "spline", "step", "area", "area-spline", "area-step", "bar", "scatter", "pie", "donut"];

!function() {
	var f = new eg.Flicking("#wrapper").on({
		flickEnd: function(e) {
			dot[lastIndex].classList.remove("on");
			dot[lastIndex = e.index].classList.add("on");
		}
	});

	// chart type update per hour
	document.getElementById("chart-type").innerHTML = window.currentType = types[getRandom(0, types.length)];

	// indicator
	document.querySelector("#indicator p").innerHTML =
		Array(f.getTotalCount() + 1).join("<span></span>");

	var dot = document.querySelectorAll("#indicator span");
	var lastIndex = 0;

	dot[lastIndex].classList.add("on");

	// code highlighting
	hljs.initHighlightingOnLoad();
}();
