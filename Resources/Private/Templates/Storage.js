(function(){function e(){i.parentElement.removeChild(i)}function t(){i.classList.remove(n.visible),setTimeout(e,500),localStorage.setItem(l.name,l.value)}function o(){localStorage.getItem(l.name)==l.value?e():setTimeout(function(){for(var e=i.querySelectorAll(n.button),o=0;e.length>o;o++)e[o].addEventListener("click",t);i.classList.add(n.visible)},500)}var i=document.querySelector(".cookie-dialogue");if(i){var l={name:"cookieDialogue",value:"closed"},n={visible:"-visible",button:"button"};o()}})();