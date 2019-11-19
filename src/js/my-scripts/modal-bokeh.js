function addBokeh() {
	document.getElementById("bokehSection").className = "blur";
	document.getElementById("bokehCanvas").className = "blur-less";
	document.getElementById("modalBokeh").className = "visible";
};

function removeBokeh() {
	document.getElementById("bokehSection").className = document.getElementById("bokehSection").className.replace(/(?:^|\s)blur(?!\S)/g , '');
	document.getElementById("bokehCanvas").className = document.getElementById("bokehCanvas").className.replace(/(?:^|\s)blur-less(?!\S)/g , '');
	document.getElementById("modalBokeh").className = document.getElementById("modalBokeh").className.replace(/(?:^|\s)visible(?!\S)/g , '');
};

function goBlur() {
	document.getElementById("bokehTrigger").addEventListener( 'click' , addBokeh );
	document.getElementById("modalBokeh").addEventListener( 'click' , removeBokeh );
}

//	window.addEventListener('resize', resizeCanvas, false);
	
	/*function resizeCanvas() {
	        canvas.width = window.innerWidth;
	        canvas.height = window.innerHeight;
	        drawCanvas(); 
	}
	resizeCanvas();
	
	function drawCanvas() {
		for (i = 1; i <= 100; i++) {
			var canvas = document.getElementById('canvas');
		    var context = canvas.getContext('2d');
		    
		    var randomize = Math.floor(Math.random() * 150) + 1;
		    var r = randomize;
		    var g = randomize;
		    var b = randomize;
		    var randomColor = 'rgba(' + b + ',' + b + ',' + b + ', 0.8)';

		    var width = Math.floor(Math.random() * canvas.height * 5 );
		    var height = Math.floor(Math.random() * canvas.height);
		    var radius = Math.floor(Math.random() * 100);
	
		    var circles = function() {
		        context.beginPath();
		        context.arc(width, height, radius, 0, 2 * Math.PI, false);        
		        context.fillStyle = randomColor;
		        context.fill();
		    };

			circles();
		};
	};
};
*/
goBlur()