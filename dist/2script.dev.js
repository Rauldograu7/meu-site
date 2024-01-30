"use strict";

var show = true;
var menuContent = document.querySelector('.content');
var menuToggle = menuContent.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function () {
  document.body.style.overflow = show ? 'hidden' : 'initial';
  menuContent.classList.toggle('on', show);
  show = !show;
});
//# sourceMappingURL=2script.dev.js.map
