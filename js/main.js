function checkTime() {
	var d = new Date();
	var hours = d.getHours();
	var min = d.getMinutes();

	return hours !== 13 &&
		(hours >= 11 && hours <= 16) &&
		(min >= 30 && min <= 59);
}

function generate() {
	var code = document.getElementById('generate').value;

	try {
		window.c && window.c.destroy();
		window.c = eval('(' + code + ')');
	} catch(e) {}

	if (checkTime()) {
		if (c.internal.config.data_type === currentType) {
			alert("짝짝~! 1차 미션을 성공하셨습니다. :)\n2차 미션을 이어서 수행해 주세요!");

			setTimeout(function() {
				location.href = "https://egjs.github.io/deview2017/test.html";
			}, 1000);
		} else {
			alert("다시 시도해 주세요~!\n"+ currentType +" 유형의 차트를 생성해 주셔야 합니다.");
		}
	} else {
		alert("죄송합니다. 아직 미션을 수행할 수 있는 시간이 아닙니다.\n아래의 시간 구간에서만 미션을 수행할 수 있습니다.\n\n11:30 ~ 11:59, 12:30 ~ 12:59, 14:30 ~ 14:59,\n15:30 ~ 15:59, 16:30 ~ 16:59")
	}
}

!function() {
	var f = new eg.Flicking("#wrapper").on({
		flickEnd: function(e) {
			dot[lastIndex].classList.remove("on");
			dot[lastIndex = e.index].classList.add("on");
		}
	});

	// chart type update per hour
	document.getElementById("chart-type").innerHTML = window.currentType = ({
		"t11": "bar",
		"t12": "step",
		"t14": "spline",
		"t15": "area",
		"t16": "donut"
	})["t"+ (new Date().getHours())] || "bar";

	// indicator
	document.querySelector("#indicator p").innerHTML =
		Array(f.getTotalCount() + 1).join("<span></span>");

	var dot = document.querySelectorAll("#indicator span");
	var lastIndex = 0;

	dot[lastIndex].classList.add("on");

	// code highlighting
	hljs.initHighlightingOnLoad();
}();