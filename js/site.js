
$(function() {
	$("#lead-more").click(function(){
		alert("Nice click!");
	});

	$('.solution').hover(function() {
		$(this).css("background", "#EEEEEE").fadeIn(300);
	}, function() {
		$(this).css("background", "#FFFFFF").fadeIn(300);
	})

});

function callback() {
	var canvas = document.getElementById('energyChart');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		/*ctx.fillStyle = "#949FB1";
		ctx.beginPath();
		ctx.arc(420, 305, 10, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
		*/
	}
}

function plotData() {
	var canvas;
	canvas = document.getElementById("energyChart");
	var ctx = canvas.getContext('2d');
	var lastend = 0;
	var myColor = ["#ECD078","#D95B43","#C02942","#542437","#53777A"];

	var data = [
		{
			value : 19,
			color : "#E2EAE9"
		},
		{
			value: 22,
			color:"#F7464A"
		},
		{
			value : 32,
			color : "#D4CCC5"
		},
		{
			value : 28,
			color : "#949FB1"
		}
	]

	var options = { onAnimationComplete: callback, animationEasing: 'linear', animationSteps: 25, animateScale: true};

	var myChart = new Chart(ctx).Doughnut(data, options);
	
}	

plotData();