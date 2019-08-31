AFRAME.registerComponent('markerhandler', {

    init: function() {
		
		const aEntity = document.querySelector("#vid");
		const animatedMarker = document.querySelector("#animated-marker");
		
		animatedMarker.addEventListener('markerFound', function() {
			aEntity.pause();
			alert("found");
			aEntity.play();
		});
		
}});
