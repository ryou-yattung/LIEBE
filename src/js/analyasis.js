var progressLogEl = document.querySelector('.progress-log');
console.log(progressLogEl);

var update = anime({
  targets: '.update_bar',
  width: `100%`,
  delay: 500,
  easing: 'easeInOutCirc',
  update: function(anim) {
     progressLogEl.value = '' + Math.round(anim.progress) + '%';
  }
});