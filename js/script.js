const navToogle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');


navToogle.addEventListener('click', function(){

	mainNav.classList.toggle('open');

	if( mainNav.classList.contains('open') ){

		mainNav.setAttribute('aria-expended', true);

	} else{

		mainNav.setAttribute('aria-expended', false);
	}

},false);