import {Line} from 'progressbar.js'

var progressBar = new Line('#container', {
    strokeWidth: 0.2,
    color: '#0FA0CE'
});


let isComplete = false

function start(duration = 5000) {
    isComplete = false;
    progressBar.set(0)
    progressBar.stop();
    progressBar.animate(0.6, {duration: duration, easing: 'easeOut'}, function () {
        !isComplete && progressBar.animate(0.9, {duration: duration *2, easing: 'easeIn'})
    })
}

function complete(duration = 200) {
    isComplete = true;
    progressBar.animate(1, {duration: duration}, function () {
        progressBar.set(0);
    })
}

export default {
    progressBar,
    start,
    complete
}