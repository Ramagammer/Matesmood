window.onload

const atras = document.getElementById('back');

atras.addEventListener('click', e => {
	history.back();
});