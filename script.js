particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


  
            /****************************** 
            	TOGGLE COLOR MODE
            	By Timelapse
             *******************************/
            		var button = document.getElementById("toggleColor");
            var htmlElement = document.getElementsByTagName("html")[0];
            
            
            /** 1. Determine the icon based on the color scheme chosen **/
            function modeSelect() {
            	if (htmlElement.classList == "lightMode") {
            		button.getElementsByTagName("I")[0].classList= "ph-bold ph-sun-dim";
            		localStorage.setItem("mode", "lightMode");
            	}
            
            	else {
            		button.getElementsByTagName("I")[0].classList = "ph-fill ph-sun";	
            		localStorage.setItem("mode", "darkMode");
            	}
            }
            
            /** 2. Select the last color scheme chosen by the user or default to dark mode **/
            if (typeof(Storage) !== "undefined" && localStorage.getItem("mode") !== null) {
            		 htmlElement.classList = localStorage.getItem("mode");
            	 modeSelect();
            } 
            else {
            		 htmlElement.classList = "darkMode";
            	 modeSelect();
            }
            
            /** 3. Toggle between Light & Dark Mode **/
            button.addEventListener("click", function(){
            
            	if (htmlElement.classList == "lightMode") {
            		htmlElement.classList.remove("lightMode");
            		htmlElement.classList.add("darkMode");
            		modeSelect();
            	}
            	else {
            		htmlElement.classList.add("lightMode");
            		htmlElement.classList.remove("darkMode");
            		modeSelect();
            	}
            });