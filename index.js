(function() {
    'use strict';
    var controls = document.getElementById('controls');

    var go = document.getElementById('goButton');
    var green = document.getElementById('goLight')

    var stop = document.getElementById('stopButton');
    var red = document.getElementById('stopLight');

    var slow = document.getElementById('slowButton');
    var orange = document.getElementById('slowLight');

    controls.addEventListener('click', function() {
        if (event.target.id === "stopButton") {
            red.classList.toggle('stop');
        }
    })
    controls.addEventListener('click', function() {
        if (event.target.id === "slowButton") {
            orange.classList.toggle('slow');
        }
    })
    controls.addEventListener('click', function() {
        if (event.target.id === "goButton") {
            green.classList.toggle('go');
        }
    })
})();

controls.addEventListener('mouseover', function() {
    if (event.target.id === 'stopButton' || event.target.id === 'goButton' || event.target.id === 'slowButton') {
        console.log('Mouse hovered over the ' + event.target.innerText + ' button');
    }
})

controls.addEventListener('mouseout', function() {
    if (event.target.id === 'stopButton' || event.target.id === 'goButton' || event.target.id === 'slowButton') {
        console.log('Mouse left the ' + event.target.innerText + ' button');
    }
})

// controls.addEventListener('mouseoff', function(){})
