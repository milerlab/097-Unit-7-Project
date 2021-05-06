// init
var start = $("#start");
var img = $("#img");
var eq = $("#earthquake");
var txt = $("#text");
var spc = $("#space")
var cred = $("#credit")
var DOMeq = document.getElementById("earthquake");
var i = 0;
var space = false;
var txtArr = [
	"It is widely known that California is a place of many"
	+" earthquakes.",
	"However, many people don't stop to wonder <em>why</em>"
	+" these earthquakes occur.",
	"If you investigate further, you will find that the true"
	+" answer to this question lies not in the unexplored skies"
	+" above our Earth, but upon the Earth itself...",
	"... written in the web of cracks that spiders between two"
	+" of the Earth's most prominent lithospheric plates.",
	"The answer is the San Andreas Fault Line.",
	"The San Andreas Fault is a transform fault boundary that"
	+" runs vertically along the length of California.",
	"Extending over 800 miles through the Golden State, it"
	+" marks the boundary at which two of the Earth's most"
	+" prominent lithospheric plates, the Pacific Plate and the"
	+" North American Plate, slide past each other.",
	"The main geological feature that distinguishes this plate"
	+" boundary from the land around it is a fault, or a large"
	+" crack or fissure in the earth, which ranges from several"
	+" hundred feet to one mile in width.",
	"How, you might wonder, does the San Andreas Fault contribute"
	+" to earthquakes throughout California?",
	"Because the edges of the lithospheric plates are not perfectly"
	+" aligned with one another, this makes it somewhat difficult"
	+" for them to slide past each another at transform boundaries.",
	"As the Pacific Plate and the North American Plate bypass each"
	+" other at the San Andreas Fault, their edges become jammed,"
	+" and this friction results in pressure buildup at the boundary.",
	"This pressure becomes more and more concentrated as the plates"
	+" continue to push past, and eventually one plate gathers enough"
	+" momentum to force itself past the other plate.",
	"When this happens, the pressure in the fault is finally released.",
	"The ground shudders and rumbles with the sudden movement of the"
	+" two plates. Like a shiver rippling down the spine of the Earth,"
	+" an earthquake has arrived.",
	"The San Andreas Fault is more than a mere crack along the Earth."
	+" In a sense, it is a crucial aspect of Californian life.",
	"The fault has the capability to attract geologists and tourists"
	+" alike to learn about and study the amazing phenomena that occur"
	+" because of it...",
	"... and yet it is also able to bulldoze buildings and crush roads"
	+" and people to the ground in a matter of seconds.",
	"Here at the San Andreas Fault, events occur that could alter the"
	+" course of life in California for years to come.",
	"Here, the very earth shifts beneath our feet as two colossal plates"
	+" slide past each other at the rate a fingernail grows.",
	"Here, scientists and geologists gather to study the miracle of our"
	+", constantly advancing and adjusting their knowledge of Earth's"
	+" past and present in an attempt to save its future...",
	"... starting at the San Andreas Fault.",
];
var imgArr = [null, null,
	{
		src: "Earth.jpeg",
		width: 600,
		height: 600.5,
		alt: "Image of Earth from outer space",
		credit: "© Photo: NASA/Apollo 17 crew"
	},
	{
		src: "Fissure.jpg",
		width: 800,
		height: 448,
		alt: "Image of a fissure in the Earth",
		credit: "© Photo: Marcio Jose Sanchez, AP"
	},
	{
		src: "FaultMap.jpeg",
		width: 380,
		height: 382,
		alt: "Map of the San Andreas Fault",
		credit: "© Photo: David Lynch"
	},
	{
		src: "Model.png",
		width: 730.62500,
		height: 438.12500,
		alt: "Model of the San Andreas Fault and surrounding landscape.",
		credit: ""
	}
];

start.fadeTo(0, 0.7).fadeTo(800, 1);
$("*:not(html, body, #start, h1, #start p, #start-btn, #credit)").hide();

// button click
$("button#start-btn").on("click", function() {
	$("body")
		.css("background-image", "none")
		.css("background-color", "tan");
	start.hide();
	$("#credit").hide();
	
	eq.fadeIn(1000);
	DOMeq.play();
	txt.html(txtArr[i]).fadeIn(1000);
	
	eq.on("timeupdate", function() {
		if(Math.floor(DOMeq.currentTime) == 6) {
			space = true;
			spc.show();
		}
	});
	
});

// slideshow
function next() {
	if (i <= txtArr.length-1) { i++; }
	if (i === 5) {
		$("body").css("background-color", "lightskyblue");
	}
	spc.hide();
	txt.fadeTo(1000, 0, function() {
		txt.html(txtArr[i]).fadeTo(1000, 1);
	});
	if (imgArr[i] && i < 6) {
		eq.hide();
		img
			.fadeOut(1000, function() {
				img
					.attr("src", imgArr[i].src)
					.attr("width", imgArr[i].width)
					.attr("height", imgArr[i].height)
					.attr("alt", imgArr[i].alt)
					.css("margin-left", img.attr("width")/-2)
					.fadeIn(1000);
			});
		cred.text(imgArr[i].credit).show();
	} else if (i < 6) {
		img.hide();
		cred.hide();
	}
	if (i === 21) {
		end();
	}
};

function end() {
	space = false;
	txt
		.css("color", "purple")
		.css("font-family", "fantasy")
		.css("font-size", "40px")
		.text("Thank you for watching!");
};

$("body").keypress(function(e) {
	if (e.code = "Space") {
		if (space) { next(); }
	}
});
