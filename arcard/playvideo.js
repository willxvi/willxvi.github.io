AFRAME.registerComponent('markerhandler', {

    init: function() {
		
		const aEntity = document.querySelector("#video1");
		const animatedMarker = document.querySelector("#animated-marker");
		
		animatedMarker.addEventListener('markerFound', function() {
			alert("found");
			aEntity.play()	
		});
		
}});
