var menuBtn=document.querySelector(".page-header__btn"),menu=document.querySelector(".main-nav--top");menuBtn.addEventListener("click",function(e){e.preventDefault(),menuBtn.classList.toggle("page-header__btn--close"),menu.classList.toggle("main-nav--show")});