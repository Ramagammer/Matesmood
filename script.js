window.onload

const atras = document.getElementById('back');

atras.addEventListener('click', e => {
	history.back();
});

function iniciarMap() {
	var coord = {lat: -34.651683,lng: -58.640602};
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 14,
		center: coord
	});
	var marker = new google.maps.Marker({
		position: coord,
		map: map
	});
}
